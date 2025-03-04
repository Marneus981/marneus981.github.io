import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/placeholder/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome</h1>
            <p>Whats a matter baby?</p>
            <button className='btn'>I don't know sugar, whats the matter with you?
                <img src={dark_arrow} alt="" />
            </button>
        </div>
      
    </div>
  )
}
export default Hero
