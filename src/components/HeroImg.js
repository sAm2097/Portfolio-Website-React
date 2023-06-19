import './HeroStyle.css'

import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='intro img'></img>
        </div>
        <div className='content'>
            <p>Welcome, Trust me with your next Project</p>
            <h1>Frontend/Web Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg