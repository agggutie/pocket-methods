import React, { useEffect } from 'react';
import '../Styles/hero.css';
import right from '../Assets/images/music.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';


const Hero = () => {

  return (
    <div className='hero'>
      <div className='left'>
        <h1>The Beginner's Joyful Universe</h1>
        <Link
          to={'/instrument'}
          className='ready'
          onMouseOver={(e) => (e.target.innerText = "Let's Go!")}
          onMouseOut={(e) => (e.target.innerText = "Ready to Learn?")}
        >
          Ready to Learn?
        </Link>
      </div>
      <div className='right'>
        <img src={right} alt='music' />
      </div>

      <div className='hero-info' data-aos='fade-up'>
        <h2>WHY POCKET METHODS?</h2>
        <p>
          As a middle school band director, I found myself creating beginning band exercises that connected to music content standards and made my students feel seen and heard in their first year of instrumental music learning. For many of my students, Black gospel music was that resonating connection that honored the musical experiences they brought with them to school. Pocket brings this motivating learning experience to the fingertips of any student, teacher, or parent. I hope you enjoy it!
        </p>
        <h3>- Charlie Edmonds, Founder of Pocket Methods, LLC</h3>
      </div>
    </div>
  );
};

export default Hero;
