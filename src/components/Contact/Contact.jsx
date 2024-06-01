import React from 'react'
import {Element} from 'react-scroll'
import './Contact.css'
import { IconButton } from '@mui/material'
import {LinkedIn, Instagram, GitHub, YouTube} from '@mui/icons-material'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
     <h1>Contact</h1>

     <div className='contact__container'>
        <p>
            Email: <span>parameshwaranit22@gmail.com</span>
        </p>
        <p>
            GitHub: <span>https://github.com/Parameshwaran-P</span>
        </p>
        <div className='contact__icons'>
        <a href="https://www.linkedin.com/in/parameshwaran-p">
            <IconButton>
                <LinkedIn/>
            </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/parameshwaran-p">
            <IconButton>
                <Instagram/>
            </IconButton>
        </a>
        <a href="https://github.com/Parameshwaran-P">
            <IconButton>
                <GitHub/>
            </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/parameshwaran-p">
            <IconButton>
                <YouTube/>
            </IconButton>
        </a>
        </div>
     </div>
    </Element>
  )
}

export default Contact