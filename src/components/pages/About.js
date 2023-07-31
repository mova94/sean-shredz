import React from 'react';
import '../../styling/About.css';

export default function About() {
  return(
      <div className='about_container'>
        <img className='about_image' src="images/compMeAway.jpg" alt="Sean Comp Medals"  />

        <p className='about_text'>  
          <p><span></span>I was 12 years old when I first stepped foot in a gym. Being a shy 6th grader with no muscle made the gym a terrifying place for me. I decided to hire a coach who specialized in weight lifting. This kickstarted my fitness journey, and helped me progress in the gym.</p>
          <br />
          <p><span></span>Now I am a full time trainer and competitive bodybuilder specializing in weight loss and muscle building. I have over 10 years of experience developing fitness and nutrition programs. Using my training methods, I’ve helped hundreds of clients achieve their fitness goal.</p>
          <br />
          <p><span></span>My vision is to inspire people to take control of their lives, and achieve the unthinkable. Starting my fitness journey was the best decision i’ve ever made, and now i’m here to help you start yours.</p>
        </p>
      </div>
    )
}
