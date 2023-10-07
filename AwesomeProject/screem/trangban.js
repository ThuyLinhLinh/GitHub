import React from 'react';

export const addStyles = (styles) => {
  const styleSheet = document.createElement('style');

  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

export const ImageWithText = ({ src, text }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={src} alt={text} style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
    <div>{text}</div>
  </div>
);
