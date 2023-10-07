import React from 'react';

const images = [
  { src: 'image1.jpg', alt: 'Image 1', text: 'Text 1' },
  { src: 'image2.jpg', alt: 'Image 2', text: 'Text 2' },
  { src: 'image3.jpg', alt: 'Image 3', text: 'Text 3' },
];

const addStyles = (styles) => {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);
};

const imageStyles = `
  .image-container {
    display: flex;
  }

  .image-wrapper {
    position: relative;
    width: 200px;
    height: 150px;
    margin-right: 20px;
    overflow: hidden;
    border-radius: 10px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
  }
`;

const ImageWithText = ({ src, alt, text }) => {
  return (
    <div className="image-wrapper">
      <img src={src} alt={alt} className="image" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

const App = () => {
  addStyles(imageStyles);

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
