import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Github, Linkedin, ExternalLink, Loader2, AlertCircle } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const email = 'lawrence2000april@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '1dd3967c-fce2-4f66-b5f5-ba816bfa6c01',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Lawrence Melvin Portfolio Contact',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        setErrorMessage(result.message || 'Failed to dispatch message. Please try emailing directly.');
      }
    } catch {
      setErrorMessage('Network connection error. Please email lawrence2000april@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full py-4 px-2 font-mono text-[13px]">
      {/* Line Numbers Gutter */}
      <div className="w-12 select-none text-[#6e7681] text-right pr-4 flex flex-col space-y-1 font-mono text-[12.5px] opacity-70">
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i}>{String(i + 1).padStart(2, '0')}</span>
        ))}
      </div>

      {/* Code Header & Interactive Contact Terminal */}
      <div className="flex-1 pr-6 pl-2 space-y-2">
        <div className="text-[#6a9955] italic">
          # contact.md — Direct Communication Dispatch Terminal
        </div>
        <div className="text-[#38bdf8] font-bold text-base">
          # Get in Touch with Lawrence Melvin S
        </div>
        <div className="text-[#ce9178] italic">
          &gt; Software Engineer &bull; Backend, Systems & Cloud Automation
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 ml-2 font-sans">
          {/* Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-lg space-y-4">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f59e0b]" />
                Communication Channels
              </h3>
              <p className="text-xs text-[#a0a0a0] leading-relaxed">
                Currently open to backend and fullstack engineering roles. Feel free to reach out directly via email or connect on LinkedIn and GitHub.
              </p>

              {/* Email Copy Card */}
              <div className="p-3 rounded bg-[#1e1e1e] border border-[#333333] flex items-center justify-between font-mono text-xs">
                <div className="truncate mr-2">
                  <div className="text-[10px] text-[#6e7681]">DIRECT EMAIL</div>
                  <div className="text-[#38bdf8] truncate font-medium">{email}</div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 bg-[#252526] hover:bg-[#333333] border border-[#3c3c3c] rounded text-[#cccccc] hover:text-white flex items-center gap-1 shrink-0 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[#10b981] text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2">
                <a
                  href="https://github.com/LawrenceMelvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#1e1e1e] hover:bg-[#2d2d2d] border border-[#333333] flex items-center justify-between text-xs text-[#cccccc] transition-colors"
                >
                  <span className="flex items-center gap-2 font-mono">
                    <Github className="w-4 h-4 text-white" />
                    github.com/LawrenceMelvin
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#858585]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lawrence-melvin-39b417215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#1e1e1e] hover:bg-[#2d2d2d] border border-[#333333] flex items-center justify-between text-xs text-[#cccccc] transition-colors"
                >
                  <span className="flex items-center gap-2 font-mono">
                    <Linkedin className="w-4 h-4 text-[#007acc]" />
                    linkedin.com/in/lawrence-melvin
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#858585]" />
                </a>
              </div>
            </div>

            {/* SLA Telemetry Info */}
            <div className="p-4 rounded-lg bg-[#1e1e1e] border border-[#2d2d2d] text-xs font-mono text-[#858585] space-y-2">
              <div className="flex justify-between">
                <span>AVAILABILITY:</span>
                <span className="text-[#10b981] font-bold">IMMEDIATE / FLEXIBLE</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-white">REMOTE / HYBRID</span>
              </div>
              <div className="flex justify-between">
                <span>RESPONSE SLA:</span>
                <span className="text-[#f59e0b]">&lt; 24 HOURS</span>
              </div>
            </div>
          </div>

          {/* Interactive Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-5 rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-lg">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <Send className="w-4 h-4 text-[#38bdf8]" />
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded bg-[#1e1e1e] border border-[#10b981]/50 text-center space-y-3 font-mono">
                  <CheckCircle2 className="w-10 h-10 text-[#10b981] mx-auto animate-bounce" />
                  <div className="text-white font-bold text-sm">Message Packet Delivered!</div>
                  <p className="text-xs text-[#a0a0a0]">
                    Thank you for reaching out, {formData.name || 'Friend'}. I will review your inquiry and respond promptly within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#858585] font-mono mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Chen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white rounded p-2 focus:border-[#007acc] focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#858585] font-mono mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white rounded p-2 focus:border-[#007acc] focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#858585] font-mono mb-1">Subject / Role Opportunity</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senior Backend Engineer Role / Project Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white rounded p-2 focus:border-[#007acc] focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[#858585] font-mono mb-1">Message Content</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Lawrence, we came across your work in distributed backend systems and would love to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white rounded p-2 focus:border-[#007acc] focus:outline-none font-mono resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded bg-red-950/40 border border-red-500/40 text-red-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[11px]">Dispatch Error</div>
                        <div className="text-[10px] text-red-200/80">{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#007acc] hover:bg-[#0062a3] disabled:bg-[#007acc]/50 text-white font-semibold rounded font-sans flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Dispatching Packet to Mail...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
