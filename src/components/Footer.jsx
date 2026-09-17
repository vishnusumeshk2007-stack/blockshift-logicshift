import React from 'react';
import { ArrowUp, Terminal, Shield, MapPin } from 'lucide-react';
import PixelMark from './PixelMark';
import { siteConfig } from '../data/siteConfig';

/**
 * Footer: Production footer displaying LogicShift identity,
 * event context (BlockShift x GDG at Pillai College of Engineering),
 * and dynamic current year.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Segment */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-row">
              <PixelMark size={24} />
              <span className="footer-brand-name">LOGICSHIFT</span>
            </div>
            <p className="footer-tagline mono">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="footer-ethos">
              Engineered with restraint, first-principles logic, and zero artificial fluff.
            </p>
          </div>

          {/* Event Context Col */}
          <div className="footer-context-col">
            <span className="mono footer-col-heading">EVENT & CAMPUS CONTEXT</span>
            <div className="context-card">
              <div className="context-row">
                <span className="context-bullet">■</span>
                <span className="mono context-label">COMPETITION:</span>
                <span className="context-val">{siteConfig.competition}</span>
              </div>
              <div className="context-row">
                <span className="context-bullet">■</span>
                <span className="mono context-label">VENUE:</span>
                <span className="context-val">{siteConfig.institution}</span>
              </div>
              <div className="context-row">
                <span className="context-bullet">■</span>
                <span className="mono context-label">LOCATION:</span>
                <span className="context-val">{siteConfig.campusLocation}</span>
              </div>
            </div>
            <p className="footer-disclaimer mono">
              * Mentioned strictly as competitive context. No false sponsorships or endorsements claimed.
            </p>
          </div>

          {/* Telemetry & Quick Link Col */}
          <div className="footer-telemetry-col">
            <span className="mono footer-col-heading">TELEMETRY STAMP</span>
            <div className="footer-telemetry-box mono">
              <div>LAT/LON: {siteConfig.coordinates}</div>
              <div>BUILD VER: 2026.04.REL</div>
              <div>CLIENT: WEB_SPA_VITE</div>
              <div className="footer-status-pill">
                <span className="beacon-mini"></span>
                <span>SYSTEM NORMAL</span>
              </div>
            </div>

            <button onClick={scrollToTop} className="footer-top-btn mono" aria-label="Back to top">
              <span>RETURN TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy mono">
            © {currentYear} LOGICSHIFT. All rights reserved. Built for BlockShift × GDG.
          </div>
          <div className="footer-meta-right mono">
            <span>HEISENBERG THEME INTERPRETATION // DEADPIXEL INFLUENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
