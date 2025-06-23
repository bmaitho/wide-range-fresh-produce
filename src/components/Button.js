import React from 'react';
import './Button.css';

export default function Button({ children, onClick, to, type = 'button', className = '' }) {
  // If 'to' prop is provided, render as <a> for internal navigation or Link; 
  // but for simplicity, we just allow passing href via to.
  if (to) {
    return (
      <a href={to} className={`btn custom-btn ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`btn custom-btn ${className}`}>
      {children}
    </button>
  );
}
