import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styling/HeroSection.css';

function HeroSection() {
  return (
    <div className='fade-in hero-container'>
        <div>
          <h1 id='orgName'> SEAN SHREDZ </h1>
        </div>
        <div>
          <h4 id='orgSaying'> Personalized Meals & Routines </h4>
        </div>
        <div>
          <h4 id='orgQuote'>  "My vision is to inspire people to take control of their Life, and achieve the unthinkable." - Sean Maloney, Founder</h4>
        </div>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
    </div>
  );
}

export default HeroSection;
