import React from 'react'
import { FC } from 'react';

interface ButtonProps{
    text: String;
    icon: React.ReactNode;
}

const Button:FC<ButtonProps> = ({icon, text}) => {
  return (
    <button>
        {icon}
        {text}
    </button>
  )
}

export default Button