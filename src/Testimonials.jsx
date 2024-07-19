import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from './assets/next-icon.png';
import back_icon from './assets/back-icon.png';
import user_1 from './assets/user-1.png';
import user_2 from './assets/user-2.png';
import user_3 from './assets/user-3.png';
import user_4 from './assets/user-4.png';

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;

  const handleForward = () => {
    if (tx > -75) { 
      tx -= 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const handleBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='Next' className='next-item' onClick={handleForward} />
      <img src={back_icon} alt='Back' className='back-item' onClick={handleBackward} />
      <div className="slider" ref={slider}>
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>William Blake</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>William Blake</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>William Blake</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>William Blake</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
