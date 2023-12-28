import React, { useState } from 'react';
import {Button} from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/background_video.mp4" autoPlay loop muted/>
        <h1> _Code Your Future.</h1>
        <p>Elevate with Programming</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              <Link to='/Learn' className='btn-links'>
                LEARN
              </Link>
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SUBSCRIBE</Button>  {/* <i className='far fa-play-circle'/> use this for the play button */} 
        </div>
    </div>
  )
}

export default HeroSection
