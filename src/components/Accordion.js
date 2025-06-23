import React, { useState, useRef } from 'react';
import './Accordion.css';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
      >
        <span>{title}</span>
        <span className="accordion-icon">{open ? '−' : '+'}</span>
      </button>
      <div
        id={`accordion-content-${title.replace(/\s+/g, '-')}`}
        className={`accordion-content ${open ? 'open' : ''}`}
        ref={contentRef}
        style={
          open
            ? { maxHeight: contentRef.current?.scrollHeight + 'px' }
            : { maxHeight: 0 }
        }
      >
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}
