import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';
import PixelMark from './PixelMark';
import { siteConfig } from '../data/siteConfig';

/**
 * Navbar: Sticky navigation bar with responsive mobile menu.
 * Features:
 * - Brand with Heisenberg-inspired pixel mark + LOGICSHIFT logotype
 * - Smooth section jumping on home page + routing to /projects
 * - Quick Heisenberg Terminal launcher
 * - Responsive mobile drawer
 */
export default function Navbar({ onOpenTerminal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when location changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (targetId) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Left: Brand Identity */}
        <Link to="/" className="brand-link" aria-label="LogicShift Home">
          <PixelMark size={28} className="brand-mark" />
          <div className="brand-text-block">
            <span className="brand-title">{siteConfig.teamName}</span>
            <span className="brand-badge mono">PCE // BLKSHIFT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link 
            to="/" 
            className={`nav-link mono ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
          >
            HOME
          </Link>

          <button 
            type="button" 
            onClick={() => handleNavClick('about')} 
            className="nav-link nav-btn mono"
          >
            ABOUT
          </button>

          <button 
            type="button" 
            onClick={() => handleNavClick('skills')} 
            className="nav-link nav-btn mono"
          >
            SKILLS
          </button>

          <Link 
            to="/projects" 
            className={`nav-link mono ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            PROJECTS
            <span className="nav-counter mono">4</span>
          </Link>

          <button 
            type="button" 
            onClick={() => handleNavClick('contact')} 
            className="nav-link nav-btn mono"
          >
            CONTACT
          </button>
        </nav>

        {/* Right CTA / Terminal Trigger */}
        <div className="header-right-actions">
          {onOpenTerminal && (
            <button 
              onClick={onOpenTerminal} 
              className="terminal-quick-btn mono"
              title="Open Heisenberg Terminal"
              aria-label="Open Heisenberg Terminal"
            >
              <Terminal size={14} />
              <span>TERMINAL</span>
            </button>
          )}

          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }} 
            className="btn btn-primary nav-talk-btn mono"
          >
            TALK TO ME
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-header">
              <span className="mono drawer-title">LOGICSHIFT // NAVIGATION</span>
              <span className="tech-badge">PCE NODE</span>
            </div>

            <nav className="mobile-nav-links">
              <Link 
                to="/" 
                className="mobile-link mono" 
                onClick={() => setMobileOpen(false)}
              >
                <span className="mobile-link-index">01</span>
                <span>HOME</span>
              </Link>

              <button 
                type="button" 
                className="mobile-link mono mobile-btn" 
                onClick={() => handleNavClick('about')}
              >
                <span className="mobile-link-index">02</span>
                <span>ABOUT & ETHOS</span>
              </button>

              <button 
                type="button" 
                className="mobile-link mono mobile-btn" 
                onClick={() => handleNavClick('skills')}
              >
                <span className="mobile-link-index">03</span>
                <span>SKILLS & TOOLCHAIN</span>
              </button>

              <Link 
                to="/projects" 
                className="mobile-link mono" 
                onClick={() => setMobileOpen(false)}
              >
                <span className="mobile-link-index">04</span>
                <span>PROJECT FILES (EXP_LOG)</span>
              </Link>

              <button 
                type="button" 
                className="mobile-link mono mobile-btn" 
                onClick={() => handleNavClick('contact')}
              >
                <span className="mobile-link-index">05</span>
                <span>CONTACT (TALK TO ME)</span>
              </button>
            </nav>

            <div className="mobile-drawer-footer">
              {onOpenTerminal && (
                <button 
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenTerminal();
                  }} 
                  className="btn btn-outline mobile-term-btn mono"
                >
                  <Terminal size={14} />
                  <span>LAUNCH TERMINAL</span>
                </button>
              )}
              <div className="drawer-telemetry mono">
                BUILD: 2026 // PCE NAVI MUMBAI
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
