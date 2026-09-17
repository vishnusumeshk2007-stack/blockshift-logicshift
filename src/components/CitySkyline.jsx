import React, { useState } from 'react';

/**
 * CitySkyline: Stylized, interactive Navi Mumbai night skyline.
 * Represents "City of Ideas" — every building is an active idea being built.
 * Features:
 * - Varied building widths, irregular floor heights, balconies, rooftop water tanks & antennas.
 * - Reactive sodium-vapor amber windows that illuminate on hover.
 * - Subtle ambient glow and engineering telemetry labels.
 */
export default function CitySkyline() {
  const [activeBuilding, setActiveBuilding] = useState(null);

  const buildings = [
    {
      id: "b1",
      name: "IDEA // SEC-01",
      spec: "ASYNC EVENT QUEUE",
      x: 10,
      width: 44,
      height: 180,
      floors: 10,
      cols: 3,
      rooftop: "tank", // water tank
      antenna: false
    },
    {
      id: "b2",
      name: "IDEA // SEC-02",
      spec: "STATE DELTA ENGINE",
      x: 60,
      width: 58,
      height: 250,
      floors: 14,
      cols: 4,
      rooftop: "antenna",
      antennaHeight: 35
    },
    {
      id: "b3",
      name: "IDEA // SEC-03",
      spec: "DISTRIBUTED CACHE",
      x: 124,
      width: 50,
      height: 140,
      floors: 7,
      cols: 3,
      rooftop: "shed",
      antenna: false
    },
    {
      id: "b4",
      name: "IDEA // SEC-04",
      spec: "TELEMETRY MATRIX",
      x: 180,
      width: 68,
      height: 310,
      floors: 18,
      cols: 5,
      rooftop: "tank-antenna",
      antennaHeight: 45
    },
    {
      id: "b5",
      name: "IDEA // SEC-05",
      spec: "PIPELINE SCHEDULER",
      x: 254,
      width: 52,
      height: 220,
      floors: 12,
      cols: 3,
      rooftop: "tank",
      antenna: false
    },
    {
      id: "b6",
      name: "IDEA // SEC-06",
      spec: "BYTECODE SANDBOX",
      x: 312,
      width: 62,
      height: 280,
      floors: 15,
      cols: 4,
      rooftop: "antenna",
      antennaHeight: 40
    },
    {
      id: "b7",
      name: "IDEA // SEC-07",
      spec: "VECTOR GRAPH CORE",
      x: 380,
      width: 48,
      height: 165,
      floors: 8,
      cols: 3,
      rooftop: "shed",
      antenna: false
    },
    {
      id: "b8",
      name: "IDEA // SEC-08",
      spec: "EVENT LOG PERSIST",
      x: 434,
      width: 72,
      height: 330,
      floors: 19,
      cols: 5,
      rooftop: "tank-antenna",
      antennaHeight: 50
    },
    {
      id: "b9",
      name: "IDEA // SEC-09",
      spec: "EDGE GATEWAY ROUTE",
      x: 512,
      width: 48,
      height: 195,
      floors: 11,
      cols: 3,
      rooftop: "tank",
      antenna: false
    }
  ];

  return (
    <div className="city-visual-container">
      {/* City Status / Idea Tooltip Banner */}
      <div className="city-telemetry-strip">
        <div className="city-telemetry-left">
          <span className="beacon-mini"></span>
          <span className="mono">NAVI MUMBAI ARCHITECTURE GRID // 18.9902°N 73.1277°E</span>
        </div>
        <div className="city-telemetry-right mono">
          {activeBuilding ? (
            <span className="city-active-tag">
              <span className="active-tag-code">{activeBuilding.name}:</span> {activeBuilding.spec}
            </span>
          ) : (
            <span className="city-default-tag">HOVER OVER BUILDINGS TO PROBE ACTIVE IDEAS</span>
          )}
        </div>
      </div>

      {/* SVG Canvas for Skyline */}
      <div className="skyline-canvas-wrap">
        <svg
          viewBox="0 0 570 380"
          className="skyline-svg"
          preserveAspectRatio="xMidYMax meet"
          role="img"
          aria-label="Stylized Navi Mumbai night skyline representing ideas being engineered"
        >
          <defs>
            {/* Sodium-Vapor Ambient Glow Gradient */}
            <radialGradient id="sodiumGlow" cx="50%" cy="100%" r="70%">
              <stop offset="0%" stopColor="#f05a1a" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#9e3d1b" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#090a0d" stopOpacity="0" />
            </radialGradient>

            {/* Building Surface Linear Gradients */}
            <linearGradient id="bldgGradDefault" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#161922" />
              <stop offset="100%" stopColor="#0d0f15" />
            </linearGradient>

            <linearGradient id="bldgGradHover" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#252a38" />
              <stop offset="100%" stopColor="#13161f" />
            </linearGradient>

            {/* Subtle Engineering Grid Filter */}
            <pattern id="cityGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#222836" strokeWidth="0.5" opacity="0.4" />
            </pattern>
          </defs>

          {/* Background Ambient Sky Glow */}
          <rect x="0" y="0" width="570" height="380" fill="url(#sodiumGlow)" />
          <rect x="0" y="0" width="570" height="380" fill="url(#cityGrid)" />

          {/* Horizon Back-Drop Subtle Distant Silhouette */}
          <path
            d="M0 310 L40 290 L75 290 L110 320 L150 270 L190 270 L220 330 L270 260 L330 260 L360 300 L410 250 L470 250 L510 310 L570 290 L570 380 L0 380 Z"
            fill="#0b0d12"
            opacity="0.75"
          />

          {/* Foreground Stylized Buildings */}
          {buildings.map((b) => {
            const isHovered = activeBuilding?.id === b.id;
            const y = 370 - b.height;

            return (
              <g
                key={b.id}
                className="building-group"
                onMouseEnter={() => setActiveBuilding(b)}
                onMouseLeave={() => setActiveBuilding(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Active Building Sodium Beacon Column */}
                {isHovered && (
                  <rect
                    x={b.x - 4}
                    y={0}
                    width={b.width + 8}
                    height={380}
                    fill="url(#sodiumGlow)"
                    opacity="0.6"
                    pointerEvents="none"
                  />
                )}

                {/* Rooftop Structures */}
                {/* 1. Water Tanks (Indian urban skyline signature) */}
                {(b.rooftop === "tank" || b.rooftop === "tank-antenna") && (
                  <g className="rooftop-tank">
                    {/* Stand */}
                    <rect x={b.x + 6} y={y - 12} width={12} height={12} fill="#1a1e28" stroke="#2b3342" strokeWidth="0.8" />
                    {/* Cylindrical Tank Body */}
                    <rect x={b.x + 5} y={y - 16} width={14} height={7} rx="2" fill={isHovered ? "#f05a1a" : "#242b3a"} />
                  </g>
                )}

                {/* 2. Elevator Room / Shed */}
                {(b.rooftop === "shed" || b.rooftop === "tank-antenna") && (
                  <rect
                    x={b.x + b.width - 20}
                    y={y - 14}
                    width={16}
                    height={14}
                    fill="#151822"
                    stroke="#2b3342"
                    strokeWidth="0.8"
                  />
                )}

                {/* 3. Antennas / Masts with Warning Lights */}
                {(b.rooftop === "antenna" || b.rooftop === "tank-antenna") && (
                  <g className="rooftop-mast">
                    <line
                      x1={b.x + b.width / 2}
                      y1={y}
                      x2={b.x + b.width / 2}
                      y2={y - (b.antennaHeight || 35)}
                      stroke={isHovered ? "#ff7e2e" : "#3e485e"}
                      strokeWidth="1.5"
                    />
                    {/* Crossbars */}
                    <line
                      x1={b.x + b.width / 2 - 4}
                      y1={y - (b.antennaHeight || 35) + 10}
                      x2={b.x + b.width / 2 + 4}
                      y2={y - (b.antennaHeight || 35) + 10}
                      stroke={isHovered ? "#ff7e2e" : "#3e485e"}
                      strokeWidth="1"
                    />
                    {/* Collision Light Beacon */}
                    <circle
                      cx={b.x + b.width / 2}
                      cy={y - (b.antennaHeight || 35)}
                      r={isHovered ? 2.5 : 1.8}
                      fill={isHovered ? "#ff3b00" : "#f05a1a"}
                      className="antenna-beacon"
                    />
                  </g>
                )}

                {/* Main Building Body */}
                <rect
                  x={b.x}
                  y={y}
                  width={b.width}
                  height={b.height}
                  fill={isHovered ? "url(#bldgGradHover)" : "url(#bldgGradDefault)"}
                  stroke={isHovered ? "#f05a1a" : "#222836"}
                  strokeWidth={isHovered ? "1.5" : "1"}
                  style={{ transition: 'all 180ms ease' }}
                />

                {/* Balcony / Floor Divider Lines */}
                {Array.from({ length: Math.floor(b.floors / 3) }).map((_, divIdx) => (
                  <line
                    key={`div-${divIdx}`}
                    x1={b.x}
                    y1={y + (divIdx + 1) * (b.height / (Math.floor(b.floors / 3) + 1))}
                    x2={b.x + b.width}
                    y2={y + (divIdx + 1) * (b.height / (Math.floor(b.floors / 3) + 1))}
                    stroke="#1a1e29"
                    strokeWidth="1"
                  />
                ))}

                {/* Pixel Windows Matrix */}
                {Array.from({ length: b.floors }).map((_, fIdx) => {
                  const floorY = y + 10 + fIdx * 14;
                  if (floorY > 355) return null;

                  return (
                    <g key={`floor-${fIdx}`}>
                      {Array.from({ length: b.cols }).map((_, cIdx) => {
                        const winWidth = 4;
                        const winHeight = 5;
                        const colSpacing = (b.width - 12) / (b.cols - 1 || 1);
                        const winX = b.x + 6 + cIdx * colSpacing;

                        // Deterministic illumination pattern + reactive on hover
                        const isLitByDefault = ((fIdx * 7 + cIdx * 3 + b.width) % 5 === 0);
                        const isLitOnHover = isHovered && ((fIdx + cIdx) % 2 === 0 || isLitByDefault);
                        const isLit = isHovered ? isLitOnHover : isLitByDefault;

                        const winColor = isLit
                          ? (isHovered ? "#ff8c3b" : "#e06c24")
                          : "#141720";

                        return (
                          <rect
                            key={`win-${fIdx}-${cIdx}`}
                            x={winX}
                            y={floorY}
                            width={winWidth}
                            height={winHeight}
                            fill={winColor}
                            opacity={isLit ? 0.95 : 0.4}
                          />
                        );
                      })}
                    </g>
                  );
                })}

                {/* Base Foundation Stamp */}
                <line
                  x1={b.x}
                  y1={370}
                  x2={b.x + b.width}
                  y2={370}
                  stroke={isHovered ? "#f05a1a" : "#2f384a"}
                  strokeWidth="2"
                />
              </g>
            );
          })}

          {/* Ground Baseline / Panvel Datum Line */}
          <line x1="0" y1="370" x2="570" y2="370" stroke="#f05a1a" strokeWidth="1.5" opacity="0.65" />
          <line x1="0" y1="374" x2="570" y2="374" stroke="#222836" strokeWidth="1" />
        </svg>
      </div>

      {/* Narrative Label */}
      <div className="city-narrative-footer">
        <span className="mono idea-quote">
          &ldquo;Every building represents an idea being built.&rdquo;
        </span>
        <span className="mono city-sub-coords">
          PCE PANVEL CAMPUS // BLOCKSHIFT GDG 2026
        </span>
      </div>
    </div>
  );
}
