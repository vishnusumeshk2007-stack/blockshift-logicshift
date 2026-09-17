import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Terminal from './components/Terminal';
import { X, Terminal as TerminalIcon } from 'lucide-react';

/**
 * ScrollToTop: Ensures window scrolls to top on route change,
 * or scrolls smoothly to the target hash element.
 */
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly for DOM to paint
      setTimeout(() => {
        const id = hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+` or Ctrl+T to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === 'k')) {
        e.preventDefault();
        setTerminalModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="app-layout">
        {/* Sticky Header Navigation */}
        <Navbar onOpenTerminal={() => setTerminalModalOpen(true)} />

        {/* Main Routed Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer />

        {/* Global Floating Heisenberg Terminal Toggle Button */}
        <button
          className="floating-terminal-trigger mono"
          onClick={() => setTerminalModalOpen(prev => !prev)}
          title="Toggle Heisenberg Terminal (Ctrl+K)"
          aria-label="Toggle Heisenberg Terminal"
        >
          <TerminalIcon size={16} />
          <span className="trigger-text">CLI // TERMINAL</span>
          <span className="trigger-badge">^K</span>
        </button>

        {/* Floating Terminal Modal Overlay */}
        {terminalModalOpen && (
          <div className="terminal-overlay" onClick={() => setTerminalModalOpen(false)}>
            <div 
              className="terminal-modal-dialog" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-close-strip">
                <span className="mono modal-strip-title">HEISENBERG CLI // MODAL DISPATCH</span>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setTerminalModalOpen(false)}
                  aria-label="Close Terminal"
                >
                  <X size={16} />
                </button>
              </div>
              <Terminal onClose={() => setTerminalModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
