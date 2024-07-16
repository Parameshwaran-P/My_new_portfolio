import React from 'react'
import pic1 from '../Projects/twitter-clone.png'
import pic2 from '../Projects/blog page.png'
import pic3 from '../Projects/my portfolio.png'
import pic4 from '../Projects/crud.png'
import pic5 from '../Projects/spice-hut.png'
import pic6 from '../Projects/Text-to-voice.png'

import { Element } from 'react-scroll'
import Showprojects from '../Showprojects/Showprojects'
import './Projects.css'
const Projects = () => {

    const config =[
      {
        image:pic1,
        title:' Twitter Clone App',
        description:'Developed a Twitter clone application using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
        link:'https://social-media-using-mern-fullstack-and.onrender.com/'
        },
              {
                image:pic2,
                title:' Responsive Blog website',
                description:'A dynamic and responsive blog website developed using ReactJS and Tailwind CSS.',
                link:'https://psh-blog.netlify.app'
                },
                {
                image:pic3,
                title:'My Portfolio',
                description:'This is my personal portfolio website developed using ReactJS and Tailwind CSS. It showcases my skills, projects, and professional background in a clean and modern design.',
                link:''
                },
                {
                image:pic4,
                title:'Text to voice converter',
                description:'A Text to voice convert website user enter a text to voice. built with ReactJs and Tailwind CSS',
                link:''
                },
                {
                image:pic5,
                title:'Psh-Spicy Hut!',
                description:'A Restaruant website like a swiggey. built with HTML and CSS',
                link:''
                },
                {
                image:pic6,
                title:' Text to voice converter',
                description:' A Text to voice convert website user enter a text to voice. built with Html, Css, Javascript',
                link:''
                },
                
        ]
    
  return (
    
      <Element className='projectContainer'>
        <h1>Projects</h1>
        <p>These are some of my best projects , I have built these with ReactJS, MERN, VannilaJS, CSS. check them out.</p>
        <div className='projects'>
        {
            config.map((project, index)=>{
                 return(
                    <Showprojects key={index} image={project.image} title={project.title} description={project.description} link={project.link} />
                 )
            })
        }
        </div>
      </Element>
    
  )
}

export default Projects