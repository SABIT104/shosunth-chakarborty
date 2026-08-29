import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  Linkedin,
  Facebook,
  Github,
  Instagram,
  ArrowUpRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const socialIcons: Record<string, React.ElementType> = {
  Linkedin,
  Facebook,
  Github,
  Instagram
};

export const Contact: React.FC = () => {
  const { profile, showToast, sendMessage } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.phoneNumber);
    showToast(`Phone number ${profile.phoneNumber} copied to clipboard!`, 'success');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields (Name, Email, Message)', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const ok = await sendMessage(formData);
      if (ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      }
    } catch (err: any) {
      showToast('Message could not be saved to server, please call directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading"
          >
            Get In Touch
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, want to elevate your search engine rankings, or discuss technical web development? Let’s connect.
          </p>
        </div>

        {/* Contact Grid: Info Cards (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 1. HIGH-PRIORITY PHONE CARD (Clickable tel link + prominent Call button) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="contact-phone-card"
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-amber-400 tracking-wider block">
                      Direct Phone & WhatsApp
                    </span>
                    <span className="text-xs text-slate-300 font-medium font-mono">Instant Consultation</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy Phone Number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Prominently Displayed Phone Number */}
              <div className="my-4 p-3.5 rounded-2xl bg-[#020617] border border-amber-500/30 text-center">
                <a
                  id="contact-phone-link"
                  href={profile.phoneTel}
                  className="text-xl sm:text-2xl font-extrabold font-mono text-amber-400 hover:text-amber-300 tracking-tight transition-colors block"
                >
                  {profile.phoneNumber}
                </a>
              </div>

              {/* Prominent "Call Me" Button */}
              <a
                id="contact-call-me-btn"
                href={profile.phoneTel}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold font-mono text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <PhoneCall className="w-4 h-4 group-hover/btn:animate-bounce" />
                <span>Call Me Now ({profile.phoneNumber})</span>
              </a>
            </motion.div>

            {/* 2. EMAIL & LOCATION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-slate-700 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Email Address</div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xs sm:text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-slate-700 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Location</div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono">
                  {profile.country}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">{profile.location}</div>
              </div>

            </div>

            {/* 3. SOCIAL MEDIA CHANNELS */}
            <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800">
              <div className="text-xs font-mono uppercase font-semibold text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Follow & Connect on Social Media</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(profile.socials || []).map((social) => {
                  const IconComponent = socialIcons[social.iconName] || ArrowUpRight;
                  return (
                    <a
                      key={social.platform}
                      id={`social-link-${social.platform.toLowerCase()}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1.5 group font-mono"
                    >
                      <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                      <span className="text-[11px] font-semibold">{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below, and I will respond to your inquiry within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Message Dispatched Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I have received your message and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Next.js Website Development & SEO Campaign"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project, goals, or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button: "Send Message" */}
                  <button
                    id="contact-send-message-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold font-mono text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
