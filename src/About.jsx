import React from 'react';
import about_img from './assets/about.png';
import play_icon from './assets/play-icon.png';
import './About.css';

const About = ({ playState, togglePlayState }) => {
  return (
    <div className='about container'>
      <div className="about-left">
        <img src={about_img} alt='About University' className="about-img" />
        <img 
          src={play_icon} 
          alt='Play Icon'  
          className='play-icon' 
          onClick={togglePlayState} 
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt maxime, pariatur possimus aperiam, exercitationem consectetur numquam sequi similique velit modi est. Quos tempora cum reiciendis doloremque libero? Sapiente expedita aliquid adipisci exercitationem deserunt excepturi harum ex, totam ratione aperiam nobis repudiandae veritatis ab recusandae dolores doloremque eaque praesentium impedit iure nemo, earum quasi. Fuga?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nobis! Et fuga perspiciatis libero est quasi tenetur itaque ipsa ratione earum ea ex ab cum id vel alias modi, veniam, amet aspernatur quod minus veritatis. Maxime, soluta! Delectus perspiciatis doloremque, voluptatem quo eum quia voluptatum cum minima repellendus tempora?</p>
      </div>
    </div>
  );
};

export default About;
