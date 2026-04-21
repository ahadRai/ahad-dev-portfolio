import { useState, useEffect, memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Dhaka coordinates
const DHAKA = { lng: 90.4125, lat: 23.8103 };

// Start (world view) → End (Dhaka zoomed)
const START_CENTER = [0, 20];
const END_CENTER = [DHAKA.lng, DHAKA.lat];
const START_SCALE = 150;
const END_SCALE = 6000;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Ease-in-out cubic for smooth feel
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function MapBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = easeInOutCubic(scrollProgress);
  const center = [
    lerp(START_CENTER[0], END_CENTER[0], t),
    lerp(START_CENTER[1], END_CENTER[1], t),
  ];
  const scale = lerp(START_SCALE, END_SCALE, t);

  // Show marker only near the end
  const showMarker = scrollProgress > 0.75;
  const markerOpacity = Math.min((scrollProgress - 0.75) / 0.2, 1);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden',
        background: '#0a192f',
      }}
    >
      {/* Gradient overlays for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(10,25,47,0.4) 70%, rgba(10,25,47,0.8) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: center,
          scale: scale,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rpioperties?.name || geo.id}
                geography={geo}
                fill="#112240"
                stroke="#1e3a5f"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: '#1a2f4a' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Dhaka marker */}
        {showMarker && (
          <Marker coordinates={[DHAKA.lng, DHAKA.lat]}>
            <g opacity={markerOpacity}>
              <circle r={8} fill="none" stroke="#64ffda" strokeWidth={2}>
                <animate
                  attributeName="r"
                  from="6"
                  to="18"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r={5} fill="#64ffda" />
              <text
                textAnchor="middle"
                y={-18}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fill: '#64ffda',
                  fontSize: '10px',
                  fontWeight: 600,
                }}
              >
                Dhaka, Bangladesh
              </text>
            </g>
          </Marker>
        )}
      </ComposableMap>

      {/* Animated grid lines effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 3,
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />
    </div>
  );
}

export default memo(MapBackground);
