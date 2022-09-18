import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styling/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='picContainer'>
        <div className='pic' id='pic1'> 
          <h1>hello</h1> 
        </div>
        <div className='pic' id='pic2'> 
          <h1>hello</h1> 
        </div>
        <div className='pic' id='pic3'> 
          <h1>hello</h1> 
        </div>
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
