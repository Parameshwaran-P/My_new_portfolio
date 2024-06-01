import React from 'react'
import { Link } from 'react-scroll'
import './HeroContent.css'

const HeroContent = () => {
  function handleClick(){
    const pdfUrl = "Paramesh_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  return (
    <div className='heroContent'>
        <div className='heroContent__container'>
           <h1>Mr. PARAMESHWARAN P</h1>
           <p>I'm a MERN full stack developer</p>
           <a href="www.google.com">
            <button className='download__button' onClick={handleClick}>DownloadCV</button>
           </a>
           <Link to='projects' smooth={true} duration={500}>
            <button className='myproject__button'>My projects</button></Link>
        </div>
    </div>
  )
}

export default HeroContent