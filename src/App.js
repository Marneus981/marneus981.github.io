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
import InfoCards from './components/infoCards/infoCards'

import AboutMe from './components/aboutMe/aboutMe'
import ProjectsCard from './components/projectsCard/projectsCard'
import './config'
const App = () => {

  const [playState, setPlayState] = useState(false);
  const project0 = {
        institution: 'University of Nebraska-Lincoln',
        title: 'Neural Bioelectricity Project',
        summary: 'A project focused on understanding the neural bioelectricity in the human body.',
        skills: ['Python', 'Machine Learning', 'Data Analysis','Neuroscience', 'EEG Analysis'],
        user: 'marneus981',
        repoName: 'NeuralBioelectricityProject',
        showFullTitle: true,
    };
  const project1 = {
        institution: 'University of Nebraska-Lincoln',
        title: 'Machine Learning for Predictive Analytics',
        summary: 'A project that applies machine learning techniques to predictive analytics.',
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Analytics'],
        user: 'marneus981',
        repoName: 'MAPPA',
        showFullTitle: true,
    };
  /*Variables*/
  return (  
    <div>
        {/* Navigation bar / Container */}
        <Stripes/>
        <Navbar/>
        {/* Background section */}
        {/* <Hero/> */}
        <div className='container_2'>
          <AboutMe/>

          <Title subTitle='My Work Experience' title='The Places I Have Worked At'/>
          
          <div className='grid'>
            <ProjectsCard project={project0}/>
            <ProjectsCard project={project1}/>
          </div>

          <Title subTitle='My University Projects' title='To Contribute To YOUR Continued Success' />
          <div className='grid'>
            <ProjectsCard project={project0}/>
            <ProjectsCard project={project1}/>
          </div>

          <Title subTitle='My Personal Projects' title='To Highlight My Zeal and Love For Tech' />
          <div className='grid'>
            <ProjectsCard project={project0}/>
            <ProjectsCard project={project1}/>
          </div>

          <Title subTitle='My Other Passions' title='To Complement My Skills and Myself'/>
          <InfoCards/>

          <Title subTitle='Contact Me!' title='Be It For Work or Just To Connect'/>
          <Contact/>

          
        </div>
        {/* Adds space to sides by adding container properties*/}
        {/* <div className='container'>
            
            <Title subTitle= 'My Projects' title= 'To Contribute To YOUR Continued Success'/>
            <Programs/>

            <About setPlayState={setPlayState}/>

            <Title subTitle='My Education' title='My Trojan War'/>

            <Campus/>


            <Title subTitle='Testimonials' title='The Odyssey'/>
            <InfoCards/>



            <Title subTitle='Contact Me' title='Commune with Odysseus'/>
            <Contact/>
            
            
        </div> */}
        <Footer/>
        {/* <VideoPlayer playState={playState} setPlayState={setPlayState} youtubeID={global.config.youtubeID.un}/> */}
    </div>
  )
}

export default App
