import React from 'react'
import './about.css'
import about_img from '../../assets/placeholder/about.png'
import play_icon from '../../assets/placeholder/play_icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about_left'>
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_icon} alt="" className='play_icon'/>             
        </div>
        <div className='about_right'>
            <h3>About Me</h3>
            <h2>Random Bloke Trynna Complete His Nostos</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Tenetur incidunt eius corrupti facilis, necessitatibus officia rerum assumenda qui,
              quidem ut eveniet laudantium vel et iste temporibus dignissimos quam magnam iusto?</p>
        </div>
      
    </div>
  )
}

export default About
