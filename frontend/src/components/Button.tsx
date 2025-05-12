// src/components/Button.tsx
import React from 'react';
import './Button.scss'; // Importation du fichier de styles spécifique au composant

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
