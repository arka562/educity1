import { useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Program from './Program';
import Title from './Title';
import About from './About';
import Campus from './Campus';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Videoplayer from './Video-player';

function App() {
  const [playState, setPlayState] = useState(false);

  function togglePlayState() {
    setPlayState(!playState);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='What we offer' title='OUR PROGRAM' />
        <Program />
        <About playState={playState} togglePlayState={togglePlayState} />
        <Title subTitle='GALLERY' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Students said..' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
