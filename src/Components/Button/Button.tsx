// src/components/Button/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return <button className={`button ${type}`}>{text}</button>;
};

export default Button;
