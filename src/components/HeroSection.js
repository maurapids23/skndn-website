import React, { useState } from 'react';
import {Button} from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/background_video.mp4" autoPlay loop muted/>
        <h1><code>&gt;</code> Code Your Future_</h1>
        <p>Elevate with Programming</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' propsToPage={'/Learn'}>LEARN</Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' propsToPage={'/Sign-Up'}> SUBSCRIBE</Button>  {/* <i className='far fa-play-circle'/> use this for the play button */} 
        </div>
    </div>
  )
}

export default HeroSection
