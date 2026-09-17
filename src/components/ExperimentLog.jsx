import React from 'react';
import { siteConfig } from '../data/siteConfig';

/**
 * ExperimentLog: Technical timeline displaying the team's build lifecycle.
 * Visual format resembles an authentic engineering experiment lab log.
 */
export default function ExperimentLog() {
  return (
    <div className="experiment-log-wrapper">
      <div className="experiment-log-header">
        <div className="log-badge-group">
          <span className="tech-badge">
            <span className="tech-badge-dot"></span>
            PHILOSOPHY // LAB LOG
          </span>
        </div>
        <h3 className="experiment-headline">
          The Engineering Experiment Pipeline
        </h3>
        <p className="experiment-subtext">
          Software at LogicShift is treated as a continuous empirical feedback loop.
          We don't ship untested hypotheses.
        </p>
      </div>

      <div className="timeline-track">
        {siteConfig.experimentTimeline.map((item, index) => {
          const isLast = index === siteConfig.experimentTimeline.length - 1;
          return (
            <div key={item.code} className="timeline-node-card">
              <div className="node-marker-column">
                <div className="node-pip">
                  <span className="node-inner-dot"></span>
                </div>
                {!isLast && <div className="node-connector-line"></div>}
              </div>

              <div className="node-content corner-frame">
                <div className="node-top-bar">
                  <div className="node-meta">
                    <span className="mono node-phase">{item.phase}</span>
                    <span className="mono node-code">[{item.code}]</span>
                  </div>
                  <span className={`mono node-status-tag status-${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>

                <h4 className="node-stage-title">
                  {item.stage}
                </h4>

                <p className="node-description">
                  {item.description}
                </p>

                <div className="node-tech-footer">
                  <span className="mono node-spec-label">
                    GATE CRITERIA:
                  </span>
                  <span className="mono node-spec-detail">
                    {index === 0 && "Identified root bottleneck & feasibility verified"}
                    {index === 1 && "Core algorithm working in isolated benchmark"}
                    {index === 2 && "Zero regression under edge condition testing"}
                    {index === 3 && "Performance profiled & memory footprint optimized"}
                    {index === 4 && "Production bundled with Netlify edge routing verified"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
