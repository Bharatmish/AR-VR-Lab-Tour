import React, { useState } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

const images = [
  { id: 'image1', src: '/Image 1.jpg' },
  { id: 'image2', src: '/Image 2.jpg' },
  { id: 'image3', src: '/Image 3.jpg' },
  { id: 'image4', src: '/Image 4.jpg' },
  { id: 'image5', src: '/Image 5.jpg' },
  { id: 'image6', src: '/Image 6.jpg' },
  { id: 'image7', src: '/Image 7.jpg' },
  { id: 'image8', src: '/Image 8.jpg' },
  // Add more images as needed
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Scene>
        <a-assets>
          {images.map((image) => (
            <img key={image.id} id={image.id} src={image.src} alt={image.id} />
          ))}
        </a-assets>

        <Entity primitive="a-sky" src={`#${images[currentImageIndex].id}`} />
        <Entity camera look-controls position="0 1.6 0" />
        <Entity
          text={{ value: 'Use buttons to navigate the tour', align: 'center' }}
          position={{ x: 0, y: 2, z: -3 }}
        />
      </Scene>

      <button
        style={{
          position: 'absolute',
          left: '20px',
          bottom: '20px',
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
        onClick={prevImage}
      >
        Previous
      </button>

      <button
        style={{
          position: 'absolute',
          right: '20px',
          bottom: '20px',
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
}

export default App;
