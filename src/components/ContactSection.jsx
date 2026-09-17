import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

/**
 * ContactSection: Dramatic, clean final CTA for LogicShift.
 * Provides direct mailto triggers, editable contact placeholders,
 * and a zero-backend client-side collaboration drafter.
 */
export default function ContactSection() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleMailto = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || 'Project Inquiry / Collaboration with LogicShift');
    const mailBody = encodeURIComponent(message || 'Hello LogicShift team,\n\nI have an idea worth building...');
    window.location.href = `mailto:${siteConfig.contacts.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Subtle Section Index */}
        <div className="section-index">
          <span>05</span>
          <span className="section-index-line"></span>
          <span>CONNECT & COLLABORATE</span>
        </div>

        <div className="contact-grid">
          {/* Left Column: Dramatic Editorial Callout */}
          <div className="contact-main-col">
            <h2 className="contact-headline">
              Have an idea <br />
              <span className="accent-orange-text">worth building?</span>
            </h2>
            <p className="contact-subhead">
              Let&rsquo;s turn the next idea into something real. Whether it&rsquo;s a competition challenge,
              an algorithmic pipeline, or a high-velocity prototype — we are ready to build.
            </p>

            <div className="cta-action-row">
              <a 
                href={`mailto:${siteConfig.contacts.email}?subject=Collaboration%20with%20LogicShift`}
                className="btn btn-primary cta-talk-btn"
              >
                <span>TALK TO ME</span>
                <ArrowUpRight size={16} />
              </a>

              <button 
                onClick={handleCopyEmail}
                className="btn btn-outline"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                <span>{copied ? "EMAIL COPIED" : "COPY EMAIL"}</span>
              </button>
            </div>

            {/* Editable Contact Channels */}
            <div className="contact-channels-strip">
              <span className="mono channels-title">COMMUNICATION CHANNELS:</span>
              <div className="channel-links">
                <a 
                  href={`mailto:${siteConfig.contacts.email}`} 
                  className="channel-item mono"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Mail size={15} />
                  <span>{siteConfig.contacts.email}</span>
                </a>

                <a 
                  href={siteConfig.contacts.github} 
                  className="channel-item mono"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Github size={15} />
                  <span>github.com/logicshift-team</span>
                </a>

                <a 
                  href={siteConfig.contacts.linkedin} 
                  className="channel-item mono"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Linkedin size={15} />
                  <span>linkedin.com/company/logicshift</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Zero-Backend Client-Side Message Composer */}
          <div className="contact-composer-col">
            <div className="composer-card corner-frame">
              <div className="composer-header">
                <div className="composer-title-group">
                  <MessageSquare size={16} className="composer-icon" />
                  <span className="mono composer-title">COLLABORATION DISPATCHER</span>
                </div>
                <span className="mono composer-sub">CLIENT-SIDE PROTOCOL</span>
              </div>

              <form onSubmit={handleMailto} className="composer-form">
                <div className="form-group">
                  <label className="mono form-label">PURPOSE / TOPIC</label>
                  <input
                    type="text"
                    className="form-input mono"
                    placeholder="e.g. BlockShift hackathon sprint / telemetry tool"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="mono form-label">OUTLINE YOUR IDEA</label>
                  <textarea
                    className="form-textarea mono"
                    rows={4}
                    placeholder="Describe the problem, timeline, or architecture..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="composer-footer">
                  <span className="mono composer-note">
                    * Generates client mailto without storing data on external servers.
                  </span>
                  <button type="submit" className="btn btn-primary composer-submit-btn">
                    <span>LAUNCH EMAIL CLIENT</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
