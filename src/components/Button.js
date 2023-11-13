import React from 'react';
import '../styling/Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdH6w9k4w2I0qDP-olZZyRmCpW0w-jqLTl30XxUFzVx1_H4Jw/viewform?usp=sf_link"
          target="_blank"
          rel='noreferrer' 
          className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
