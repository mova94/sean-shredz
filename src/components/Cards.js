import React from 'react';
import '../styling/Cards.css';
import CardItem from './CardItem';

function Cards() {
  const textOneOnOne = 
    <div>
      <h2>What's Included?</h2>
      <br/>
      <ul>
        <li>60 minute training sessions</li>
        <br/>
        <li>weekly workout routine</li>
        <br/>
        <li>nutrition guide</li>
        <br/>
        <li>exclusive access to the SHREDZ training app</li>
      </ul>
    </div>;

  const textProjectShred =    
  <div>
    <h2>Ultimate Transformation</h2>
    <br/>
    <ul>
      <li>24/7 guidance and support</li>
      <li>designed to fit your schedule</li>
      <li>minimum 3 month program</li>
      <ul>
        <li>micromanaged meal plan</li>  
        <li>adaptive workout routine</li>
        <li>discounted training sessions</li>
        <li  id="programDisclaimer">DISCLAIMER: TRAINING SESSIONS ARE NOT INCLUDED WITH THIS PROGRAM</li>
      </ul>
    </ul>
</div>;

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/singleArmRow.mov'
              header='Project CUT'
              text={textOneOnOne}
              label='Intensity:100%'
              path='/sign-up'
            />
            <CardItem
              src='images/rearDeltRow.mov'
              header='Project SHRED'
              text={textProjectShred}
              label='Intensity: SHREDDED'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
