/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Mail, Send, Loader2, Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MagneticPill } from './ui/MagneticPill';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="contact" className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Let's Connect</h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto font-light">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
          <div className="h-1 w-20 bg-white/20 rounded-full mx-auto mt-8" />
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left bg-neutral-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-neutral-800/50 shadow-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-neutral-500 mb-2 uppercase">Name</label>
              <input 
                type="text" 
                name="user_name"
                className="w-full bg-black/50 border border-neutral-800 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-neutral-500 focus:bg-neutral-900 transition-all shadow-inner"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-neutral-500 mb-2 uppercase">Email Address</label>
              <input 
                type="email" 
                name="user_email"
                className="w-full bg-black/50 border border-neutral-800 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-neutral-500 focus:bg-neutral-900 transition-all shadow-inner"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-mono tracking-widest text-neutral-500 mb-2 uppercase">Message</label>
            <textarea 
              rows={5}
              name="message"
              className="w-full bg-black/50 border border-neutral-800 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-neutral-500 focus:bg-neutral-900 transition-all shadow-inner resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <div className="flex justify-end items-center pt-4">
            <button 
              type="submit"
              disabled={isSending || isSent}
              className={`
                relative h-12 w-32 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center overflow-hidden
                ${isSent ? 'bg-emerald-500 text-black' : error ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-neutral-200 shadow-lg'}
                ${isSending ? 'opacity-90 cursor-wait' : ''}
              `}
            >
              <AnimatePresence mode="wait">
                {isSending ? (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Loader2 className="animate-spin" size={18} />
                  </motion.div>
                ) : isSent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center gap-2"
                  >
                    <Check size={18} strokeWidth={3} />
                  </motion.div>
                ) : error ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, x: [0, -10, 10, -10, 10, 0] }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center gap-2"
                  >
                    <X size={18} strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 flex items-center justify-center gap-2"
                  >
                    Submit <Send size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </form>

        <div className="mt-16 flex justify-center">
          <MagneticPill href="mailto:sujanrv99@gmail.com">
            <Mail size={16} /> <span className="text-sm font-medium">sujanrv99@gmail.com</span>
          </MagneticPill>
        </div>
      </motion.div>
    </section>
  );
};
