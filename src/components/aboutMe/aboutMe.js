import React, { useState } from 'react'
import './aboutMe.css'
import about_img from '../../assets/placeholder/about.png'
import play_icon from '../../assets/placeholder/play_icon.png'


const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='about_me'>
        <div className='about_me_left'>
            <img src={about_img} alt="" className='about_me_img'/>             
        </div>
        <div className='about_me_right'>
            <h3>About Me</h3>
            <h2>Computer Engineer, Minor in Artificial Intelligence- University of Toronto, Among Many Other Things</h2>
            <p>Proactive Computer Engineer with Minor in Artificial Intelligence experienced in designing, developing and implementing complex software systems. Skilled in using multiple technologies, such as MySQL, React, Python, C++, Assembly, etc. Always passionate about learning new technologies. Proven ability to write clear, well-tested and extensible code through personal and university projects. Fluent in English, French, and Spanish.</p>
            <h3>About This Website</h3>
            <h2>A Personal Project Turned Portfolio</h2>
            <p>Originally this website was meant to be a personal project to learn JavaScript and ReactJS, as well as polish my CSS and HTML skills; at some point however, I decided that it could also help me in other ways beyond skill expansion: it would serve as my portfolio page, and maybe help me land a job.</p>
            <p>This website has been coded from scratch, using ReactJS, CSS and HTML. Everything has been designed or adapted (from other creatives, from sites such as codepen.io) by me. There is even a GitHub repo for this website, in case you are curious about its inner workings or my competence on the technologies it employs!</p>
            <button
              className="about_me_see_more_btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>

            <div className={`about_me_below${showMore ? ' show' : ''}`}>
            <p>Some highlights of my engineering experience are as follows:</p>
                <ul className="vignette-list">
                  <li>Passionate about writing well documented, quality code: Improved efficiency of GIS systems, and aggregation algorithms in distributed ML systems by 100%.</li>
                  <li>Implemented systems at scale using Python: Designed/Implemented novel Federated ML algorithms for model aggregation with +50% network efficiency.</li>
                  <li>Experienced in low-level/kernel programming: Co-developed a UNIX-based OS from scratch.</li>
                </ul>
                <p>Engineering aside, I am passionate about way too many things:</p>
                <ul className="vignette-list">
                  <li>I am passionate about learning new languages. I can currently speak English, French and Spanish, and I am intent on learning Italian. I believe in the expansion of one’s worldview through linguistic and cultural exploration.</li>
                  <li>I love game design and storytelling, enjoying the creation and consumption of good stories in any shape or form. I even have an itch.io page where I publish one-shot modules for TTRPGs (and hopefully soon, games).</li>
                  <li>I am a self-trained artist (20+ years of experience), with a preference for traditional media, but have dabbled in digital art.</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
