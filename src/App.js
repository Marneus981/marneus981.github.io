import React, { useState } from 'react'

import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import Title from './components/title/title'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import VideoPlayer from './components/videoPlayer/videoPlayer'
import Stripes from './components/stripes/stripes'

import './config'
const App = () => {

  const [playState, setPlayState] = useState(false);
  /*Variables*/
  return (
    
    <div>

        {/* Navigation bar / Container */}
        <Stripes/>
        <Navbar/>
        {/* Stripes */}
        
        {/* Stripes */}
        {/* <div className='stripes'>
            <div className='stripe one'></div>
            <div className='stripe two'></div>
            <div className='stripe three'></div>
        {/* Background section */}
        <Hero/>
        {/* Adds space to sides by adding container properties*/}
        <div className='container'>

            {/* Projects section */}
            <Title subTitle= 'My Projects' title= 'To Contribute To YOUR Continued Success'/>
            <Programs/>

            {/* About me section */}
            {/* <Title subTitle= 'About Me' title= 'Who Am I'/> Good REC Copilot!*/}
            <About setPlayState={setPlayState}/>
            {/* Will totally need to revamp this... ALSO will have the programs section
             be used for projects; ALSO x2 Should probably make them coherent with
             the Navbar list */}

            <Title subTitle='My Education' title='My Trojan War'/>
            {/* My education? */}
            <Campus/>

            {/* Other skills? IDK man */}
            <Title subTitle='Testimonials' title='The Odyssey'/>
            <Testimonials/>

            {/* Contact me PLEASE I BEG */}
            <Title subTitle='Contact Me' title='Commune with Odysseus'/>
            <Contact/>
            
            
        </div>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState} youtubeID={global.config.youtubeID.un}/>
    </div>
  )
}

export default App
