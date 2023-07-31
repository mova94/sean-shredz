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
        <li>Fully customized workout routine</li>
        <br/>
        <li>Personalilzed nutrition guide</li>
        <br/>
        <li>Exclusive access to the SHREDZ training app</li>
        <br />
        <li>
          Group Training Available <br /><span id="friend">Bring a Friend !</span>
        </li>
      </ul>
    </div>
    ;

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/singleArmRow.mov'
              header='Private Training Sessions'
              text={textOneOnOne}
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
