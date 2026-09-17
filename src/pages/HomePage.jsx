import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Terminal as TerminalIcon, Cpu, Layers, ShieldCheck, ChevronRight, Activity } from 'lucide-react';
import CitySkyline from '../components/CitySkyline';
import BuildMonitor from '../components/BuildMonitor';
import ExperimentLog from '../components/ExperimentLog';
import Terminal from '../components/Terminal';
import ContactSection from '../components/ContactSection';
import { siteConfig } from '../data/siteConfig';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';

/**
 * HomePage: Primary landing page fulfilling the HeisenBros brief
 * with high-craft LogicShift creative execution.
 */
export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="home-page">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Column: Typography, Mission & CTAs */}
            <div className="hero-content-col">
              {/* Event Context Pill */}
              <div className="hero-event-pill">
                <span className="beacon-mini"></span>
                <span className="mono event-pill-text">
                  BLOCKSHIFT × GDG // PILLAI COLLEGE OF ENGINEERING
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title">
                {siteConfig.teamName}
              </h1>

              {/* Supporting Line */}
              <div className="hero-slogan-wrap">
                <span className="mono hero-slogan-bracket">[</span>
                <h2 className="hero-slogan">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </h2>
                <span className="mono hero-slogan-bracket">]</span>
              </div>

              {/* Introduction */}
              <p className="hero-intro">
                An engineering-driven technology team operating from first principles.
                We turn complex problem spaces into reliable, high-performance software
                through rapid modular prototyping and relentless empirical iteration.
              </p>

              {/* CTA Action Buttons */}
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary hero-btn">
                  <span>EXPLORE PROJECTS</span>
                  <ArrowUpRight size={16} />
                </Link>

                <a href="#contact" className="btn btn-outline hero-btn">
                  <span>TALK TO ME</span>
                </a>
              </div>

              {/* Technical Status Panel */}
              <div className="hero-status-panel corner-frame">
                <div className="status-panel-header">
                  <span className="mono status-panel-title">SYSTEM DISPATCH TELEMETRY</span>
                  <span className="beacon beacon-orange"></span>
                </div>
                <div className="status-panel-grid">
                  <div className="status-item">
                    <span className="mono status-key">SYSTEM</span>
                    <span className="mono status-val val-green">{siteConfig.telemetry.system}</span>
                  </div>
                  <div className="status-item">
                    <span className="mono status-key">BUILD</span>
                    <span className="mono status-val val-orange">{siteConfig.telemetry.build}</span>
                  </div>
                  <div className="status-item">
                    <span className="mono status-key">MODE</span>
                    <span className="mono status-val val-orange">{siteConfig.telemetry.mode}</span>
                  </div>
                  <div className="status-item">
                    <span className="mono status-key">LOCATION</span>
                    <span className="mono status-val">{siteConfig.telemetry.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive City of Ideas Visual */}
            <div className="hero-visual-col">
              <div className="hero-city-card corner-frame">
                <div className="city-card-header">
                  <div className="city-header-title">
                    <Layers size={14} className="city-icon" />
                    <span className="mono">NAVI MUMBAI URBAN MATRIX // IDEAS IN PROGRESS</span>
                  </div>
                  <span className="mono city-tag">CAMPUS NODE</span>
                </div>

                {/* Interactive SVG Skyline */}
                <CitySkyline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. BUILD MONITOR & TELEMETRY STRIP
          ==================================================================== */}
      <section className="telemetry-bar-section">
        <div className="container">
          <BuildMonitor />
        </div>
      </section>

      {/* ====================================================================
          3. ABOUT SECTION / THE 5-STEP ENGINEERING PROCESS
          ==================================================================== */}
      <section id="about" className="section-wrapper about-section">
        <div className="container">
          <div className="section-header">
            <div className="section-index">
              <span>01</span>
              <span className="section-index-line"></span>
              <span>ABOUT LOGICSHIFT</span>
            </div>
            <h2 className="section-title">
              Engineered From First Principles
            </h2>
            <p className="section-desc">
              Who we are, how we approach software architecture, and why we value empirical verification over presentation fluff.
            </p>
          </div>

          <div className="about-manifesto-grid">
            <div className="about-text-card corner-frame">
              <span className="tech-badge">TEAM ETHOS</span>
              <h3 className="about-card-title">
                Zero Fluff. Complete Clarity.
              </h3>
              <p className="about-card-body">
                LogicShift was formed for the BlockShift × GDG competition at Pillai College of Engineering.
                Rather than treating software as arbitrary templates, we deconstruct every challenge into its algorithmic,
                interface, and performance constraints.
              </p>
              <p className="about-card-body">
                We believe clean code is not an aesthetic afterthought — it is an engineering requirement.
                Every building block in our projects exists for an accountable functional reason.
              </p>
            </div>

            <div className="about-text-card corner-frame">
              <span className="tech-badge">WHY ITERATION MATTERS</span>
              <h3 className="about-card-title">
                Break It Before Production Does.
              </h3>
              <p className="about-card-body">
                First drafts are always fragile. True engineering begins when you expose a prototype to high concurrency,
                irregular payloads, and constrained viewports.
              </p>
              <p className="about-card-body">
                By intentionally stress-testing our systems early, we eliminate fragility before the final release.
                Think. Build. Break. Rebuild.
              </p>
            </div>
          </div>

          {/* 5-Step Visual Engineering Loop */}
          <div className="process-flow-container">
            <div className="process-header">
              <span className="mono process-title">THE 5-STEP REBUILD CYCLE</span>
              <span className="mono process-sub">CIRCULAR EXECUTION LOOP</span>
            </div>

            <div className="process-grid">
              {siteConfig.engineeringProcess.map((step) => (
                <div key={step.step} className="process-step-card corner-frame">
                  <div className="step-number-bar">
                    <span className="mono step-num">{step.step}</span>
                    <span className="step-arrow">→</span>
                  </div>
                  <h4 className="step-name">{step.name}</h4>
                  <div className="mono step-sub">{step.subheading}</div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. EXPERIMENT LOG (TIMELINE PHILOSOPHY)
          ==================================================================== */}
      <section className="section-wrapper experiment-section">
        <div className="container">
          <div className="section-header">
            <div className="section-index">
              <span>02</span>
              <span className="section-index-line"></span>
              <span>LIFECYCLE LOG</span>
            </div>
            <h2 className="section-title">
              Experiment & Build Pipeline
            </h2>
            <p className="section-desc">
              Tracing an engineering concept through validation phases.
            </p>
          </div>

          <ExperimentLog />
        </div>
      </section>

      {/* ====================================================================
          5. SKILLS & TECHNOLOGY SECTION
          ==================================================================== */}
      <section id="skills" className="section-wrapper skills-section">
        <div className="container">
          <div className="section-header">
            <div className="section-index">
              <span>03</span>
              <span className="section-index-line"></span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              Skills & Engineering Stack
            </h2>
            <p className="section-desc">
              Categorized domains and tools. Editable data structures without fabricated percentage claims.
            </p>
          </div>

          <div className="skills-category-grid">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="skill-cat-card corner-frame">
                <div className="skill-cat-header">
                  <div>
                    <span className="tech-badge">{cat.badge}</span>
                    <h3 className="skill-cat-title">{cat.title}</h3>
                  </div>
                </div>

                <p className="skill-cat-desc">{cat.description}</p>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-row">
                      <div className="skill-row-top">
                        <span className="skill-name">{skill.name}</span>
                        <span className="mono skill-tag-pill">{skill.tag}</span>
                      </div>
                      <div className="skill-row-meta mono">
                        <span className="skill-level">{skill.level}</span>
                        <span className="skill-note">// {skill.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. FEATURED PROJECT FILES SNEAK PEEK
          ==================================================================== */}
      <section className="section-wrapper projects-preview-section">
        <div className="container">
          <div className="section-header projects-preview-header">
            <div>
              <div className="section-index">
                <span>04</span>
                <span className="section-index-line"></span>
                <span>PROJECT ARCHIVE PREVIEW</span>
              </div>
              <h2 className="section-title">
                Active Project Files
              </h2>
              <p className="section-desc">
                Engineered solutions logged with explicit problem-solution breakdowns.
              </p>
            </div>

            <Link to="/projects" className="btn btn-outline view-all-btn">
              <span>VIEW FULL ARCHIVE ({projects.length})</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="projects-preview-grid">
            {featuredProjects.map((p) => (
              <div key={p.id} className="preview-project-card corner-frame">
                <div className="project-card-top-bar">
                  <span className="mono project-num-tag">{p.projectNumber}</span>
                  <span className="mono project-date-tag">{p.date}</span>
                </div>

                <h3 className="preview-project-name">{p.name}</h3>
                <p className="preview-project-desc">{p.shortDescription}</p>

                <div className="preview-problem-box">
                  <span className="mono prob-label">CORE CHALLENGE:</span>
                  <p className="prob-text">{p.problem}</p>
                </div>

                <div className="preview-tech-tags">
                  {p.technologies.map((t, idx) => (
                    <span key={idx} className="mono tech-tag-item">{t}</span>
                  ))}
                </div>

                <div className="preview-card-footer">
                  <Link to="/projects" className="mono preview-link">
                    <span>INSPECT FULL EXPERIMENT LOG</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. HEISENBERG TERMINAL INTERACTION
          ==================================================================== */}
      <section id="terminal" className="section-wrapper terminal-section">
        <div className="container">
          <div className="section-header">
            <div className="section-index">
              <span>05</span>
              <span className="section-index-line"></span>
              <span>CLIENT INTERACTION</span>
            </div>
            <h2 className="section-title">
              Heisenberg Command Shell
            </h2>
            <p className="section-desc">
              A responsive, client-side CLI tool. Type <span className="mono" style={{ color: 'var(--orange-primary)' }}>help</span> to interrogate system capabilities, ethos, and project registers.
            </p>
          </div>

          <Terminal />
        </div>
      </section>

      {/* ====================================================================
          8. FINAL CTA & CONTACT SECTION
          ==================================================================== */}
      <ContactSection />
    </div>
  );
}
