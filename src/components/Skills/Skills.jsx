import React from 'react'
import {Element} from 'react-scroll'
import Img1 from '../Skills/skill4.jpeg'

const Skills = () => {
  return (
    <div>
        <Element className='skills' id='skills'>
            <div className='skillContainer'>
                <img src={Img1} alt="" />

            </div>
            <div className='skill__text'>
             <h1>Skillset</h1>
            </div>
        </Element>
    </div>
  )
}

export default Skills