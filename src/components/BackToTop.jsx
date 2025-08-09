import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onClick = () => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`to-top ${show ? 'show' : ''}`}
      onClick={onClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M6.7 14.7a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0l6 6a1 1 0 1 1-1.4 1.4L12 9.41l-5.3 5.3z"/>
      </svg>
      <span className="sr-only">Back to top</span>
    </button>
  );
}
