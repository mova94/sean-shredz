import React from 'react';
import '../../styling/About.css';

export default function About() {
  return(
    <div  className='about'>
      <div className='about_container'>
        <div className='left_side'>
          <img className='about_image' src="images/comp2.jpg" alt="Sean Comp Medals"  />
        </div>
        <div className='right_side'>
            <p className='aboutText'>  
              I have been in the Health and Fitness industry since 2017. Formerly a Division 1 Lacrosse Athlete, I took an interest in the Health and Fitness industry. I found fulfillment from improving people’s lives through fitness.
              Throughout this time, I have delivered life-changing results to clients. I put my training methods to the test as a Competitive Bodybuilder to the test. 
                </p>
        </div>
      </div>
    </div>
    )
}
