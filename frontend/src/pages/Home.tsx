// src/pages/Home.tsx
import React from 'react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <h1>Welcome to the Learning App!</h1>
      <Button label="Start Learning" onClick={handleClick} />
    </div>
  );
};

export default Home;
