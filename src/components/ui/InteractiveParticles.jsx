import React, { useEffect, useRef } from 'react';

export function InteractiveParticles() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Mouse state
    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
        this.shape = Math.random() < 0.3 ? 'square' : Math.random() < 0.6 ? 'cross' : 'char';
        this.char = Math.random() < 0.5 ? '0' : '1';
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        if (this.shape === 'square') {
            ctx.rect(this.x, this.y, this.size * 2, this.size * 2);
            ctx.fill();
        } else if (this.shape === 'cross') {
            const s = this.size * 1.5;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.moveTo(this.x - s, this.y);
            ctx.lineTo(this.x + s, this.y);
            ctx.moveTo(this.x, this.y - s);
            ctx.lineTo(this.x, this.y + s);
            ctx.stroke();
        } else if (this.shape === 'char') {
            ctx.font = `${this.size * 3}px "JetBrains Mono", monospace`;
            ctx.fillText(this.char, this.x, this.y);
        }
        
        ctx.closePath();
      }

      update() {
        // Basic movement
        this.x += this.dx;
        this.y += this.dy;

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;

        // Mouse interaction
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * 3; 
            const directionY = forceDirectionY * force * 3;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }

        this.draw();
      }
    }

    function initParticles() {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 6000; // Increased density from 15000
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2) + size * 2;
        let dx = (Math.random() - 0.5) * 0.5; // slow speed
        let dy = (Math.random() - 0.5) * 0.5;
        
        // Colors: Cyan and White with low opacity
        const colors = ['rgba(255, 255, 255, 0.3)', 'rgba(0, 255, 255, 0.3)']; 
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      // Draw connecting lines if close enough (optional, cool effect)
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
          + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          
          if (distance < (canvas.width/7) * (canvas.height/7)) {
            opacityValue = 1 - (distance/20000);
            if(opacityValue > 0) {
               ctx.strokeStyle = 'rgba(0, 255, 255,' + opacityValue * 0.1 + ')'; // Very faint cyan lines
               ctx.lineWidth = 1;
               ctx.beginPath();
               ctx.moveTo(particles[a].x, particles[a].y);
               ctx.lineTo(particles[b].x, particles[b].y);
               ctx.stroke();
            }
          }
        }
      }
    }

    // Init
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-40 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
}
