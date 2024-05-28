import React from 'react'
import { Link } from 'react-scroll'
import './HeroContent.css'

const HeroContent = () => {
  return (
    <div className='heroContent'>
        <div className='heroContent__container'>
           <h1>Mr. PARAMESHWARAN P</h1>
           <p>I'm a MERN full stack developer</p>
           <a href="www.google.com">
            <button className='download__button'>DownloadCV</button>
           </a>
           <Link to='projects' smooth={true} duration={500}>
            <button className='myproject__button'>My projects</button></Link>
        </div>
    </div>
  )
}

export default HeroContent