import React from 'react'
import { Element } from 'react-scroll'
import HeroContent from '../HeroContent/HeroContent'
import './Hero.css'

const Hero = () => {
  return (
    <div>
     <Element name='about' className='hero'>
      <HeroContent/>
     </Element>
    </div>
  )
}

export default Hero