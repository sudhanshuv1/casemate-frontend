import React from 'react'
import image from '../../assets/images/about.jpeg'

import './about.css'

const About = () => {
  return (
    <div className='about--page section__padding'>
        <div className="about--page_img">
            <img src={image} alt="" />
        </div>
        <div className="about--page_content">
            <h1>Find out more about us</h1>
            <p>We want to facilitate access to legal professionals by digitalizing and bringing together all lawyers and their availability on the same platform.</p>
            <p>Engineer by training, far from the world of justice, we wanted to offer a more centralized organizational model for making appointments.</p>
        </div>
    </div>
  )
}

export default About