import React from 'react';

export default function Footer({ year }) {
  return (
    <footer role="contentinfo">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span>© {year} Alex Bruce</span>
        <span className="muted">Built with React + Vite</span>
      </div>
    </footer>
  );
}
