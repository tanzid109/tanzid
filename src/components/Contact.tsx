/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { PERSONAL_INFO } from '@/data/data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setError('');
    setLoading(true);

    // Simulate sending progress
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000); // hide success box after 5s
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] text-[#E5E5E5] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 border-b border-white/10 pb-6">
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#F27D26] uppercase mb-2">// 05. GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic">
            Let&apos;s Collaborate
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">
              Have an exciting project, a role opening, or just want to say hi? Feel free to drop a message! I usually respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-5 border border-white/10 bg-[#151515] hover:border-white/20 hover:shadow-2xl rounded-xl transition-all group"
              >
                <div className="p-3 bg-white/5 text-[#F27D26] border border-white/10 rounded-lg group-hover:bg-[#F27D26] group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">Email Address</p>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-wider mt-0.5">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-5 border border-white/10 bg-[#151515] hover:border-white/20 hover:shadow-2xl rounded-xl transition-all group"
              >
                <div className="p-3 bg-white/5 text-[#F27D26] border border-white/10 rounded-lg group-hover:bg-[#F27D26] group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">Phone Call</p>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-wider mt-0.5">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 border border-white/10 bg-[#151515] hover:border-white/20 hover:shadow-2xl rounded-xl transition-all group"
              >
                <div className="p-3 bg-white/5 text-[#F27D26] border border-white/10 rounded-lg group-hover:bg-[#F27D26] group-hover:text-white transition-colors">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">WhatsApp Chat</p>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-wider mt-0.5">Direct Message Link</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Message Form */}
          <div className="lg:col-span-7 bg-[#151515] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl text-left">
            <h3 className="text-lg font-black uppercase text-white tracking-tight mb-6">Send A Direct Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3.5 bg-red-950/40 text-red-300 border border-red-500/20 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle size={15} />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="p-5 bg-emerald-950/40 text-emerald-300 border border-emerald-500/20 rounded-lg text-xs sm:text-sm flex items-start gap-3 shadow-md">
                  <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase tracking-wider text-white">Message Transmitted</p>
                    <p className="text-emerald-300/80 mt-1 font-light">Thank you for reaching out. I will review your inquiry and get back to you shortly.</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Your Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="h-11 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-0 focus:border-[#F27D26] focus:bg-[#0F0F0F] rounded-lg text-xs tracking-wider font-mono"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Your Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="h-11 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-0 focus:border-[#F27D26] focus:bg-[#0F0F0F] rounded-lg text-xs tracking-wider font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Subject (Optional)</label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about custom development"
                  className="h-11 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-0 focus:border-[#F27D26] focus:bg-[#0F0F0F] rounded-lg text-xs tracking-wider font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Your Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi tanzid, I would love to talk about building a..."
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-0 focus:border-[#F27D26] focus:bg-[#0F0F0F] rounded-lg text-xs tracking-wider font-mono min-h-25"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3 border border-white/20 text-xs uppercase font-bold tracking-[0.2em] bg-white text-black hover:bg-transparent hover:text-white hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin"></div>
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
