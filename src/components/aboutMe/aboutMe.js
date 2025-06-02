import React from 'react'
import './aboutMe.css'
import about_img from '../../assets/placeholder/about.png'
import play_icon from '../../assets/placeholder/play_icon.png'

const AboutMe = () => {
  return (
    <div className='about_me'>
        <div className='about_me_left'>
            <img src={about_img} alt="" className='about_me_img'/>             
        </div>
        <div className='about_me_right'>
            <h3>About Me</h3>
            <h2>Random Bloke Trynna Complete His Nostos</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Tenetur incidunt eius corrupti facilis, necessitatibus officia rerum assumenda qui,
              quidem ut eveniet laudantium vel et iste temporibus dignissimos quam magnam iusto?</p>

            <h3>About This Website</h3>
            <h2>My Personal Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Tenetur incidunt eius corrupti facilis, necessitatibus officia rerum assumenda qui,
              quidem ut eveniet laudantium vel et iste temporibus dignissimos quam magnam iusto?</p>
        </div>
      
    </div>
  )
}

export default AboutMe
