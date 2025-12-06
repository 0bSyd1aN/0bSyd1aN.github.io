import React, { useState, useRef } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MagneticPill } from './ui/MagneticPill';
import { motion } from 'framer-motion';

// --- CONFIGURATION ---
// REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
const SERVICE_ID = 'service_w47tbod';
const TEMPLATE_ID = 'template_8wkqn5m';
const PUBLIC_KEY = 'GWSxT1oUPZQrt7Dg6';

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSending(false);
          setIsSent(true);
          e.target.reset();
          setTimeout(() => setIsSent(false), 5000); // Reset success state after 5s
      }, (error) => {
          setIsSending(false);
          setError('TRANSMISSION FAILED. RETRY.');
          console.error(error.text);
      });
  };



  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Contact Me</h2>
        <p className="text-neutral-400 mb-12">
          Initialize encrypted transmission. Frequency open for collaboration.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left bg-cyber-black/50 p-8 rounded-3xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-cyber-cyan mb-2">IDENTITY</label>
              <input 
                type="text" 
                name="user_name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan/50 focus:bg-white/10 transition-all"
                placeholder="Enter Name"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-cyber-cyan mb-2">FREQUENCY</label>
              <input 
                type="email" 
                name="user_email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan/50 focus:bg-white/10 transition-all"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-mono text-cyber-cyan mb-2">PAYLOAD</label>
            <textarea 
              rows={4}
              name="message"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan/50 focus:bg-white/10 transition-all resize-none"
              placeholder="Enter Message"
              required
            />
          </div>

          <div className="flex justify-end items-center gap-4">
            {error && <span className="text-red-500 text-xs font-mono animate-pulse">{error}</span>}
            <button 
              type="submit"
              disabled={isSending || isSent}
              className={`
                relative px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2
                ${isSent ? 'bg-green-500 text-black' : 'bg-cyber-cyan text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'}
                ${isSending ? 'opacity-70 cursor-wait' : ''}
              `}
            >
              {isSending ? (
                <>TRANSMITTING...</>
              ) : isSent ? (
                <>TRANSMISSION CONFIRMED</>
              ) : (
                <>TRANSMIT DATA <Send size={16} /></>
              )}
            </button>
          </div>
        </form>

        <div className="mt-16 flex justify-center">
          <MagneticPill href="mailto:sujanrv99@gmail.com">
            <Mail size={16} /> sujanrv99@gmail.com
          </MagneticPill>
        </div>
      </motion.div>
    </section>
  );
};
