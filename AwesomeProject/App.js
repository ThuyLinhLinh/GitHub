import React from 'react';
import { addStyles, ImageWithText } from './trangban';

const App = () => {
  // Call addStyles with some styles
  addStyles('body { background-color: lightgray; }');

  return (
    <div className="container">
      <ImageWithText src="path_to_your_left_image.jpg" text="Left Image" />
      <div className="center-text">shopertino</div>
      <ImageWithText src="path_to_your_right_image.jpg" text="Right Image" />
    </div>
  );
}

export default App;
