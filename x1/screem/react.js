import React from 'react';
import './App.css'; // Import CSS file with styles

const images = [
  { src: 'image1.jpg', alt: 'Image 1', text: 'Text 1' },
  { src: 'image2.jpg', alt: 'Image 2', text: 'Text 2' },
  { src: 'image3.jpg', alt: 'Image 3', text: 'Text 3' },
];

const ImageWithText = ({ src, alt, text }) => {
  return (
    <div className="image-wrapper">
      <img src={src} alt={alt} className="image" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <ImageWithText
          key={index}
          src={image.src}
          alt={image.alt}
          text={image.text}
        />
      ))}
    </div>
  );
};

export default App;
