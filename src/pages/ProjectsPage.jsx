import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, Filter, Code, Terminal, Layers, ExternalLink, Cpu } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { siteConfig } from '../data/siteConfig';

/**
 * ProjectsPage: Dedicated /projects route with "PROJECT FILES // EXPERIMENT LOG" aesthetic.
 * Interactive hover states:
 * - Orange edge appears
 * - Project number changes state
 * - Subtle pixel movement occurs
 * - Details become highlighted
 */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page">
      {/* Page Header Banner */}
      <section className="projects-hero-banner">
        <div className="container">
          {/* Breadcrumb / Back Link */}
          <div className="projects-breadcrumb">
            <Link to="/" className="back-link mono">
              <ArrowLeft size={14} />
              <span>RETURN TO ROOT // HOME</span>
            </Link>
          </div>

          <div className="projects-header-grid">
            <div>
              <div className="section-index">
                <span>PROJECT_REGISTRY</span>
                <span className="section-index-line"></span>
                <span>EXPERIMENT LOGS</span>
              </div>
              <h1 className="projects-main-title">
                Project Files & Experiment Archive
              </h1>
              <p className="projects-subtext">
                Every project in the LogicShift register originates from a concrete constraint or problem statement.
                Review active builds, architectural specifications, and implementation details.
              </p>
            </div>

            {/* Telemetry Stamp */}
            <div className="projects-telemetry-card corner-frame mono">
              <div className="telemetry-stamp-row">
                <span className="stamp-label">ACTIVE FILES:</span>
                <span className="stamp-val">{projects.length} LOGS</span>
              </div>
              <div className="telemetry-stamp-row">
                <span className="stamp-label">ENVIRONMENT:</span>
                <span className="stamp-val">DEV // STAGING</span>
              </div>
              <div className="telemetry-stamp-row">
                <span className="stamp-label">TARGET:</span>
                <span className="stamp-val">BLOCKSHIFT 2026</span>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="project-filters-bar">
            <div className="filter-label mono">
              <Filter size={13} />
              <span>FILTER FILES:</span>
            </div>
            <div className="filter-pills-list">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-pill mono ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Files Grid */}
      <section className="project-files-section">
        <div className="container">
          <div className="project-files-list">
            {filteredProjects.map((project, index) => (
              <article key={project.id} className="project-file-card corner-frame">
                {/* Left Edge Visual Status Indicator Strip */}
                <div className="file-status-indicator">
                  <span className="indicator-pip"></span>
                  <span className="mono indicator-text">{project.status}</span>
                </div>

                <div className="file-inner-content">
                  {/* Top Bar: Number, Category, Date */}
                  <div className="file-header-row">
                    <div className="file-number-block mono">
                      <span className="num-hash">#</span>
                      <span className="num-val">{project.projectNumber}</span>
                    </div>

                    <div className="file-meta-tags mono">
                      <span className="category-pill">{project.category}</span>
                      <span className="date-stamp">{project.date}</span>
                    </div>
                  </div>

                  {/* Project Title & Short Description */}
                  <div className="file-title-block">
                    <h2 className="file-project-name">{project.name}</h2>
                    <p className="file-short-desc">{project.shortDescription}</p>
                  </div>

                  {/* Problem & Solution Dual Column (Lab Log Structure) */}
                  <div className="file-deep-dive-grid">
                    <div className="dive-block problem-block">
                      <div className="dive-header mono">
                        <span className="dive-tag tag-problem">PROBLEM</span>
                        <span>CORE BOTTLENECK</span>
                      </div>
                      <p className="dive-body">{project.problem}</p>
                    </div>

                    <div className="dive-block solution-block">
                      <div className="dive-header mono">
                        <span className="dive-tag tag-solution">SOLUTION</span>
                        <span>ENGINEERED ARCHITECTURE</span>
                      </div>
                      <p className="dive-body">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key Feature Highlight */}
                  <div className="file-key-feature-box">
                    <span className="mono feature-label">KEY TECHNICAL FEATURE:</span>
                    <span className="feature-text">{project.keyFeature}</span>
                  </div>

                  {/* Technical Specs & Technology Tags */}
                  <div className="file-tech-specs-row">
                    <div className="specs-group">
                      {project.specs.map((sp, spIdx) => (
                        <div key={spIdx} className="spec-item mono">
                          <span className="spec-key">{sp.label}:</span>
                          <span className="spec-value">{sp.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="tech-pills-group">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill mono">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="file-action-footer">
                    <div className="file-action-left">
                      <a 
                        href={project.viewProjectUrl} 
                        className="btn btn-primary file-btn"
                        target="_blank"
                        rel="noreferrer"
                        title="View Project Demo"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight size={15} />
                      </a>

                      <a 
                        href={project.githubUrl} 
                        className="btn btn-outline file-btn"
                        target="_blank"
                        rel="noreferrer"
                        title="Inspect GitHub Repository"
                      >
                        <Github size={15} />
                        <span>GITHUB REPO</span>
                      </a>
                    </div>

                    <div className="file-action-right mono">
                      <span>VERIFIED LOCAL BUILD</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="projects-bottom-note corner-frame">
            <div className="note-left">
              <span className="beacon beacon-orange"></span>
              <span className="mono">LOGICSHIFT REPOSITORY STANDARDS</span>
            </div>
            <p className="mono note-text">
              Project records reflect ongoing student research and hackathon implementations.
              For source code access, team collaboration, or benchmark logs, contact the team via the channel dispatcher.
            </p>
            <Link to="/#contact" className="btn btn-outline mono">
              <span>PROPOSE NEW PROJECT</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
