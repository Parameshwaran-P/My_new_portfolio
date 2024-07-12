import React from 'react'
import {Element} from 'react-scroll'
import Img1 from '../Skills/skill4.jpeg'
import LinearProgress from '@mui/material/LinearProgress';
import '../Skills/Skills.css'

const Skills = () => {
  return (
    <div>
        <Element className='skillContainer' id='skills'>
            <div className='skill__img'>
                <img src={Img1} alt="" />

            </div>
            <div className='skill__text'>
             <h1>Skillset</h1>
             <div className='skill__skillset'>
              <h5>HTML5</h5>
              <div className='skill__slider skill_slider1' id=''>
              <LinearProgress 
              variant='determinate' 
              value={85} 
              sx={{
                  '& .MuiLinearProgress-bar':
                   {
                    backgroundColor: '#19d2a1',
                   },
                   backgroundColor: 'rgb(88, 88, 88)',
                }}/>
              </div>
             </div>
             <div className='skill__skillset'>
              <h5>CSS3</h5>
              <div className='skill__slider skill_slider2'>
              <LinearProgress variant='determinate' value={90}
              sx={{
                '& .MuiLinearProgress-bar':
                 {
                  backgroundColor: 'tomato',
                 },
                 backgroundColor: 'rgb(88, 88, 88)',
              }}/>
              </div>
             </div>
             <div className='skill__skillset'>
              <h5>ReactJs</h5>
              <div className='skill__slider skill_slider3'>
              <LinearProgress variant='determinate' value={89}
              sx={{
                '& .MuiLinearProgress-bar':
                 {
                  backgroundColor: 'yellow',
                 },
                 backgroundColor: 'rgb(88, 88, 88)',
              }}/>
              </div>
             </div>
             <div className='skill__skillset'>
              <h5>NodeJs</h5>
              <div className='skill__slider skill_slider4'>
              <LinearProgress variant='determinate' value={75}
              sx={{
                '& .MuiLinearProgress-bar':
                 {
                  backgroundColor: 'green',
                 },
                 backgroundColor: 'rgb(88, 88, 88)',
              }}/>
              </div>
             </div>
             <div className='skill__skillset'>
              <h5>ExpressJs</h5>
              <div className='skill__slider skill_slider5'>
              <LinearProgress variant='determinate' value={80}/>
              </div>
             </div>
             <div className='skill__skillset'>
              <h5>MongoDB</h5>
              <div className='skill__slider skill_slider6'>
              <LinearProgress variant='determinate' value={85}
              sx={{
                '& .MuiLinearProgress-bar':
                 {
                  backgroundColor: 'red',
                 },
                 backgroundColor: 'rgb(88, 88, 88)',
              }}/>
              </div>
             </div>
             
             
            </div>
        </Element>
    </div>
  )
}

export default Skills