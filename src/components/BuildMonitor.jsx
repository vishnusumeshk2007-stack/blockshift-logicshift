import React from 'react';
import { siteConfig } from '../data/siteConfig';

/**
 * BuildMonitor: Telemetry status dashboard component.
 * Displays real-time visual system states and build modes without fake metrics.
 */
export default function BuildMonitor() {
  return (
    <div className="build-monitor-card corner-frame">
      <div className="monitor-header">
        <div className="monitor-title-group">
          <span className="beacon beacon-orange"></span>
          <span className="mono monitor-title">BUILD TELEMETRY & DIAGNOSTICS</span>
        </div>
        <span className="mono monitor-chip">NODE: PCE_PANVEL_01</span>
      </div>

      <div className="monitor-grid">
        {siteConfig.buildMonitor.map((item, idx) => (
          <div key={idx} className="monitor-row">
            <span className="mono monitor-label">{item.label}</span>
            <span className="monitor-dots">................................</span>
            <span className={`mono monitor-val val-${item.status}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="monitor-footer">
        <div className="telemetry-stat">
          <span className="mono stat-key">ENVIRONMENT:</span>
          <span className="mono stat-val">BLOCKSHIFT_GDG_2026</span>
        </div>
        <div className="telemetry-stat">
          <span className="mono stat-key">COORDINATES:</span>
          <span className="mono stat-val">{siteConfig.coordinates}</span>
        </div>
      </div>
    </div>
  );
}
