import React from 'react';
import './Hero.css';
import darkArrow from './assets/dark-arrow.png'; 

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to the world Educity</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, natus, eos dolore similique sapiente numquam ipsum dolor autem voluptate ducimus minima perspiciatis! Sunt eos consectetur, vitae dolorum facere odit eum est sit fugiat aliquam. Tempore labore quibusdam dolorem accusantium. Consequuntur quisquam iste odio dolorum dolor iure explicabo expedita dolore sint.</p>
        <button className='btn'>Explore Now: <img src={darkArrow} alt='arrow' class="arrow" /></button>
      </div>
    </div>
  );
}

export default Hero;
