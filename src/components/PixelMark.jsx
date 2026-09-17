import React from 'react';

/**
 * PixelMark: Original geometric/pixel SVG icon for LOGICSHIFT
 * Blends Heisenberg silhouette geometry (pork pie hat contour, dark glasses, goatee block)
 * with a silicon microprocessor die and logic gate traces.
 * 100% original SVG, zero third-party/copyrighted artwork.
 */
export default function PixelMark({ size = 28, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-mark ${className}`}
      style={{ shapeRendering: 'crispEdges', display: 'inline-block', verticalAlign: 'middle' }}
      aria-label="LogicShift Pixel Mark"
    >
      {/* Outer Enclosure Frame */}
      <rect x="0.5" y="0.5" width="31" height="31" fill="#0d0f14" stroke="#262d3a" strokeWidth="1" />
      
      {/* Corner Registration Markers */}
      <rect x="2" y="2" width="2" height="2" fill="#f05a1a" opacity="0.85" />
      <rect x="28" y="2" width="2" height="2" fill="#f05a1a" opacity="0.85" />
      <rect x="2" y="28" width="2" height="2" fill="#f05a1a" opacity="0.85" />
      <rect x="28" y="28" width="2" height="2" fill="#ff7e2e" />

      {/* Heisenberg Silhouette Geometry: Hat Crown */}
      <rect x="10" y="6" width="12" height="4" fill="#f05a1a" />
      
      {/* Hat Band (Lighter Amber Ribbon) */}
      <rect x="9" y="10" width="14" height="2" fill="#ff8c3b" />
      
      {/* Hat Brim (Overhanging horizontal block) */}
      <rect x="5" y="12" width="22" height="2" fill="#f05a1a" />
      
      {/* Face Foundation / Logic Matrix Background */}
      <rect x="8" y="14" width="16" height="12" fill="#151922" />
      
      {/* Glasses Frames (Twin Pixel Rectangles) */}
      <rect x="9" y="16" width="5" height="4" fill="#f05a1a" />
      <rect x="18" y="16" width="5" height="4" fill="#f05a1a" />
      
      {/* Glasses Bridge (Logic Interconnect) */}
      <rect x="14" y="17" width="4" height="2" fill="#ff8c3b" />
      
      {/* Dark Shaded Lenses */}
      <rect x="10" y="17" width="3" height="2" fill="#090a0d" />
      <rect x="19" y="17" width="3" height="2" fill="#090a0d" />
      
      {/* Goatee / Silicon Logic Gate Die Block */}
      <rect x="13" y="22" width="6" height="3" fill="#f05a1a" />
      <rect x="14" y="25" width="4" height="1" fill="#ff8c3b" />

      {/* Logic Traces / Circuit Pin Accents */}
      <rect x="0" y="15" width="2" height="2" fill="#f05a1a" opacity="0.5" />
      <rect x="30" y="15" width="2" height="2" fill="#f05a1a" opacity="0.5" />
      <rect x="15" y="0" width="2" height="2" fill="#f05a1a" opacity="0.5" />
      <rect x="15" y="30" width="2" height="2" fill="#f05a1a" opacity="0.5" />
    </svg>
  );
}
