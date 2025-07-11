import React, { useState } from 'react'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/testimonials'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import VideoPlayer from './components/videoPlayer/videoPlayer'


import Navbar from './components/navbar/navbar'
import Title from './components/title/title'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Stripes from './components/stripes/stripes'
import InfoCards from './components/infoCards/infoCards'
import AboutMe from './components/aboutMe/aboutMe'
import ProjectsCard from './components/projectsCard/projectsCard'
import QuickSection from './components/quickSection/quickSection'
import './config'
const App = () => {

  const [playState, setPlayState] = useState(false);

  /*Variables*/
    const project_w_1 = {
    institution: 'Medica Providencia Clinic',
    title: 'PEY VR Technical Assistant',
    date: '12/2022 - 03/2023',
    summary: 'Resolved technical issues with Oculus Quest VR equipment, reducing weekly downtime through systematic diagnostics and repairs. Collaborated with healthcare professionals during the testing process, resulting in a more patient-centered approach and improved satisfaction scores.',
    skills: [
    // Hard skills (alphabetical)
    'Documentation',
    'Hardware Troubleshooting',
    'Microsoft Suite',
    'VR Technologies',
    // Soft skills (alphabetical)
    'Adaptability',
    'Customer Service',
    'Creative Problem Solving',
    'Fast Learning',
    'Good Written and Communication Skills',
    'Integrity'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: false,
    };

    const project_w_2 = {
    institution: 'OISE',
    title: 'Script Programmer and Video Project Editor',
    date: '03/2022 - 05/2022',
    summary: 'Developed video description generation algorithms using Python ML and Excel, for a large video project (200+ videos). Collaborated with key stakeholders to align project goals, enhancing stakeholder satisfaction and ensuring project deliverables met expectations within 3 months.',
    skills: [
        // Hard skills (alphabetical)
        'Data Entry',
        'Excel',
        'Media Accounts Management',
        'Python',
        'Scripting',
        // Soft skills (alphabetical)
        'Creative Thinking',
        'Engagement Algorithm Catering',
        'Good Written and Communication Skills',
        'Problem Solving',
        'Project Management',
        'Stakeholder Interaction'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: false,
    };

    const project_w_3 = {
    institution: 'Medica Providencia Clinic',
    title: 'Substitute Secretary and Sales Associate',
    date: '08/2015 - 07/2018',
    summary: 'Streamlined operations by efficiently managing secretarial tasks during peak hours. Performed sales operations at the pharmacy and store sections of the clinic.',
    skills: [
        // Hard skills (alphabetical)
        'Data Entry',
        'Documentation',
        'Microsoft Suite',
        // Soft skills (alphabetical)
        'Adaptability',
        'Customer Service',
        'Emotional Intelligence',
        'Fast Learning',
        'Integrity'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: false,
    };

    const project_w_4 = {
    institution: 'Freelance',
    title: 'Freelance 3D Designer',
    date: '01/2024 - 09/2024',
    summary: 'Designed models for 3D printed products, using Blender and a variety of different slicing and printing software/hardware.',
    skills: [
        // Hard skills (alphabetical)
        '3D Animation',
        '3D Modelling',
        '3D Printing',
        'Blender',
        'Product Design',
        'Slicing Software',
        'Texturing',
        // Soft skills (alphabetical)
        'Adaptability',
        'Creative Problem-Solving',
        'Fast Learning',
        'Good Written and Communication Skills',
        'Stakeholder Interaction',
        'Transparency'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: false,
    };

    const project_u_1 = {
    institution: 'University of Toronto Capstone Project',
    title: 'Horizontal Federated Learning Research',
    date: '09/2021 - 06/2022',
    summary: 'Analyzed network performance of distributed Federated ML model aggregation (C++/Python). Developed an algorithm that doubled network efficiency with comparable model performance. Co-authored technical papers and presentations on novel aggregation algorithms.',
    skills: [
        // Hard skills (alphabetical)
        'Automated Testing',
        'Back-End Development',
        'C++',
        'CNNs',
        'Data Science',
        'Distributed Systems',
        'Documentation',
        'Federated Learning',
        'Github',
        'Jupyter',
        'Keras',
        'Machine Learning',
        'Numpy',
        'Pandas',
        'Pytorch',
        'Python',
        'Python ML',
        'Research',
        'Scikit-Learn',
        'Software Development',
        'Supervised Learning',
        'Tensorflow',
        'Version Control with Git',
        // Soft skills (alphabetical)
        'Adaptability',
        'Analytical Problem-Solving',
        'Conflict Resolution',
        'Creative Problem-Solving',
        'Good Written and Communication Skills',
        'Proactiveness',
        'Results Oriented',
        'Scope Adaptation',
        'Time Management'
    ],
    description: '',
    user: 'alexjsenn',
    repoName: 'FedScale',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: true,
    };

    const project_u_2 = {
    institution: 'University of Toronto Project',
    title: 'UNIX-based Operative System Development',
    date: '01/2021 - 06/2021',
    summary: 'Built a UNIX-based operating system from scratch (C/Assembly). Co-developed user experience features based on customer needs. Implemented multi-threading support at the OS level.Developed a UNIX-based Operative System from scratch (C/Assembly). Co-developed UX ti satidy customer needs. Implemented multi-threading capabilities on an Operative System.',
    skills: [
        // Hard skills (alphabetical)
        'Assembly',
        'C',
        'Full-Stack Development',
        'LINUX Development',
        'OS Development',
        'Pair Programming',
        'Software Development',
        'UNIX',
        // Soft skills (alphabetical)
        'Adaptability',
        'Analytical Problem-Solving',
        'Conflict Resolution',
        'Time Management'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: false,
    };

    const project_u_3 = {
    institution: 'University of Toronto Project',
    title: 'MAPPA C++ Geographical Information System',
    date: '09/2019 - 06/2020',
    summary: 'Built a GIS system using OpenStreetMap data and the C++ EZGL library. Improved algorithm efficiency by 200% and reduced memory usage by 50%. Co-developed UI/UX tailored to stakeholder needs.Co-developed UI/UX suited to stakeholder needs. Improved algorithm efficiency by 200% and reduced memory by 50% for the GIS system (C++). Built a GIS system using "OpenStreetMap" API data and the C++ EZGL Library.',
    skills: [
        // Hard skills (alphabetical)
        'APIs',
        'Algorithm Optimization',
        'Big O Space/Time Code Optimization',
        'C++',
        'Data Structures and Algorithms',
        'Documentation',
        'EZGL Library',
        'Full-Stack Development',
        'Github',
        'Linux Development',
        'OOP Design Methodologies',
        'OpenStreetMap API',
        'Search Algorithms',
        'Software Development',
        'Software Development Cycle',
        'UI/UX Design',
        'Version Control with Git',
        // Soft skills (alphabetical)
        'Adaptability',
        'Creative Problem-Solving',
        'Good Written and Communication Skills',
        'Stakeholder Interaction',
        'Time Management'
    ],
    description: '',
    user: 'marneus981',
    repoName: 'MAPPA',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: true,
    };

    const project_u_4 = {
    institution: 'University of Toronto Project',
    title: 'Optical Music Recognition: Music Sheet Transcriber',
    date: '01/2021 - 06/2021',
    summary: 'Designed a hybrid CRNN model to interpret sheet music by predicting image sequences (Python). Processed, visualized, and analyzed 100,000+ samples from the PrIMuS dataset using Python ML libraries.Designed a hybrid CRNN model, to interpret sheet music by predicting image sequences (Python). Utilized Python ML libraries to handle, preprocess, visualize and analyze over 100,000 sheet music (PrIMuS Dataset).',
    skills: [
        // Hard skills (alphabetical)
        'Automated Testing',
        'Back-End Development',
        'CNNs',
        'CRNNs',
        'Data Analysis',
        'Data Science',
        'Distributed Systems',
        'Documentation',
        'Hybrid ML Models',
        'Jupyter',
        'Keras',
        'Machine Learning',
        'Numpy',
        'Optical Music Recognition',
        'Pandas',
        'Pytorch',
        'Python',
        'Python ML',
        'RNNs',
        'Reinforcement Learning',
        'Research',
        'Scikit-Learn',
        'Supervised Learning',
        'Tensorflow',
        // Soft skills (alphabetical)
        'Adaptability',
        'Back-End Development',
        'Creative Problem-Solving',
        'Fast Learning',
        'Good Written and Communication Skills',
        'Research',
        'Scope Adaptation',
        'Time Management'
    ],
    description: '',
    user: 'marneus981',
    repoName: 'MachineLearningProjectOMR',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: true,
    };

    const project_u_5 = {
    institution: 'University of Toronto Project',
    title: 'Virtual Piano in Verilog/Assembly',
    date: '09/2019 - 12/2019',
    summary: 'Implemented a virtual piano on an FPGA board (Verilog/Assembly) and developed an encoding system to translate any song into a readable format for the piano.Implemented a virtual piano on an FPGA board and generated an encoding capable of translating any song into a readable format by said piano (Verilog/Assembly).',
    skills: [
        // Hard skills (alphabetical)
        'Assembly',
        'Audio Encoding',
        'C',
        'FPGA Software Development',
        'Pair Programming',
        'Software Development',
        'Software Development Cycle',
        'Verilog HDL',
        // Soft skills (alphabetical)
        'Adaptability',
        'Analytical Problem-Solving',
        'Back-End Development',
        'Conflict Resolution',
        'Fast Learning',
        'Scope Adaptation',
        'Time Management'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: false,
    };

    const project_u_6 = {
    institution: 'University of Toronto Project',
    title: 'Neural Signal Modeling',
    date: '09/2020 - 12/2020',
    summary: 'Assimilated multiple systems into a holistic simulation of neural signal transmission and propagation using MATLAB.',
    skills: [
        // Hard skills (alphabetical)
        'Biology',
        'Data Analysis',
        'EEG',
        'MATLAB',
        'Neuroscience',
        'Scientific Modeling',
        // Soft skills (alphabetical)
        'Analytical Problem-Solving',
        'Good Written and Communication Skills',
        'Research',
        'Time Management'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: false,
    };
    const project_p_1 = {
    institution: 'Open Source Project (On Hold)',
    title: 'TTRPG Tools',
    date: '06/2023 - 10/2024',
    summary: 'Developing AI-integrated software tools for playing and creating TTRPG games (C++/Python). Implemented automated debugging and scripting across all components.Developing a set of software tools with planned AI integration for playing and creating TTRPG Games (C++/Python). Implemented automated debugging and scripting for all different software components.',
    skills: [
    // Hard skills (alphabetical, max 6)
    'Automated Testing',
    'C++',
    'Github',
    'Python',
    'Python ML',
    'Software Development',
    // Soft skills (alphabetical, max 6)
    'Creative Problem Solving',
    'Fast Learning',
    'Proactiveness',
    'Back-End Development'
    ],
    description: '',
    user: 'marneus981',
    repoName: 'TTRPGTools',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: true,
    };

    const project_p_2 = {
    institution: 'Game Project (On Hold)',
    title: 'Magia Chef',
    date: '06/2023 - 10/2024',
    summary: 'Developing a 3D roguelike shooter in Unity (C#). Sculpted and animated original 3D assets in Blender, learning the tool in one week.Developing a 3D roguelike shooter videogame, using the Unity game engine (C#). Sculpted and animated in-game 3D assets from scratch using Blender (learned the skill in 1 week).',
    skills: [
    // Hard skills (alphabetical, max 6)
    '3D Animation',
    '3D Modeling',
    '3D Texturing',
    'C#',
    'Unity',
    'Unity 3D',
    // Soft skills (alphabetical, max 6)
    'Adaptability',
    'Creative Problem Solving',
    'Fast Learning',
    'Proactiveness',
    'Full-Stack Development'
    ],
    description: '',
    user: 'marneus981',
    repoName: 'Magical-Girl-Jam-8---Magia-Chef-Apocalypse',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: true,
    };

    const project_p_3 = {
    institution: 'Open Source Project (On Hold)',
    title: 'VKnob',
    date: '02/2024 - 10/2024',
    summary: 'Developing an overlay application to control multiple Digital Audio Workstations simultaneously (C++). Automated UI interactions on Windows using UIAutomation.Developing an overlay application to control multiple Digital Audio Workstations at the same time (C++). Automated UI calls in Windows with the use of UIAutomation for Windows.',
    skills: [
    // Hard skills (alphabetical, max 6)
    'Automated Testing',
    'C++',
    'Github',
    'Software Development',
    'Software Development Cycle',
    'UIAutomation',
    // Soft skills (alphabetical, max 6)
    'Creative Problem Solving',
    'Fast Learning',
    'Full-Stack Development',
    'Proactiveness',
    'Stakeholder Interaction'
    ],
    description: '',
    user: 'marneus981',
    repoName: 'VKnob',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: true,
    };

    const project_p_4 = {
    institution: 'Game Project',
    title: 'Untitled RPG Game Project',
    date: '04/2025 - Ongoing',
    summary: 'Developing a 2D ARPG in Unity (C#). Edited and animated 2D assets using Unity, Photoshop and Gimp.',
    skills: [
    // Hard skills (alphabetical, max 6)
    '2D Animation',
    '2D Sprites',
    'ARPG Games',
    'C#',
    'Game Programming',
    'Unity',
    // Soft skills (alphabetical, max 6)
    'Adaptability',
    'Creative Problem Solving',
    'Fast Learning',
    'Proactiveness'
    ],
    description: '',
    user: '',
    repoName: '',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: false,
    };

    const project_p_5 = {
    institution: 'Portfolio Website',
    title: 'My Portfolio',
    date: '04/2025 - Ongoing',
    summary: 'Developed and deployed a portfolio website from scratch, using HTML, CSS and JavaScript, with ReactJS: https://marneus981.github.io/Portfolio (This page!) developed from scratch using ReactJS, CSS and HTML.',
    skills: [
    // Hard skills (alphabetical, max 6)
    'CSS',
    'Github',
    'HTML',
    'ReactJS',
    'Version Control with Git',
    'Web Development',
    // Soft skills (alphabetical, max 6)
    'Adaptability',
    'Creative Problem Solving',
    'Fast Learning',
    'Proactiveness'
    ],
    description: '',
    user: 'marneus981',
    repoName: 'marneus981.github.io',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: true,
    };
    const section_1 = ['Bachelors of Applied Science in Computer Engineering'
      ,'University of Toronto Faculty of Applied Science and Engineering'
      ,'Toronto, ON, Canada'
      ,'09/2018-06/2023'
    ];
    const section_2 = ['Minor in Artificial Intelligence'
      ,'University of Toronto Faculty of Applied Science and Engineering'
      ,'Toronto, ON, Canada'
      ,'09/2018-06/2023'
    ];
    const section_3 = ['Scholarship Comittee at the Faculty of Engineering'
      ,'Represented students on the Scholarship Committee at the Faculty of Engineering, advocating for equality and true meritocracy in faculty awards.'
      ,'Comittee Student Member'
      ,'University of Toronto Faculty of Applied Science and Engineering'
      ,'Toronto, ON, Canada'
      ,'01/2020 - 12/2020'
    ];
    const section_4 = ['Engineering Science Department Ambassador Program'
      ,'Represented the Engineering Science Department at Student Outreach and Department-Organized Summits and Conferences (ENGSOC).'
      ,'Engineering Science Ambassador'
      ,'University of Toronto Faculty of Applied Science and Engineering, Engineering Science Department'
      ,'Toronto, ON, Canada'
      ,'01/2019 - 06/2019'
    ];
    const section_5 = ['University of Toronto Engineering Scholar Denomination'
      ,'Achieved highest scholar denomination upon faculty entry, and successfully maintained throughout entire career.'
      ,'University of Toronto Faculty of Applied Science and Engineering'
      ,'Toronto, ON, Canada'
      ,'09/2018-06/2023'
    ];
    const section_6 = ['United Nations Datathon 2023 Participant'
      ,'Participated in the Main and Cybersecurity tracks of the UN Datathon 2023. Created and fine tuned Machine Learning models to achieve research goals in a multidisciplinary team (team name: StatsBobOmb).'
      ,'United Nations'
      ,'11/2023'
    ];
  return (  
    <div>
        {/* Navigation bar / Container */}
        <Stripes/>
        <Navbar/>
        {/* Background section */}
        {/* <Hero/> */}
        <div className='container_2'>
          <div id='aboutme'>
            <AboutMe/>
            <Title subTitle='University and Beyond' title='My Education'/>
            
            <QuickSection texts={section_1}/>
            <QuickSection texts={section_2}/>

            <Title subTitle='In My Community' title='My Volunteer and Leadership Positions'/>
            
            <QuickSection texts={section_3}/>
            <QuickSection texts={section_4}/>

            <Title subTitle='Recognised Accomplishments, In and Out of University' title='My Awards and Scholarships'/>

            <QuickSection texts={section_5}/>
            <QuickSection texts={section_6}/>
          </div>
          <div id='work-experience'>
            <Title subTitle='My Work Experience' title='The Places I Have Worked At'/>
            
            <div className='grid'>
              <ProjectsCard project={project_w_1}/>
              <ProjectsCard project={project_w_2}/>
              <ProjectsCard project={project_w_3}/>
              <ProjectsCard project={project_w_4}/>
            </div>
          </div>
          <div id='university-projects'>
            <Title subTitle='My University Projects' title='To Contribute To YOUR Continued Success' />
            <div className='grid'>
              <ProjectsCard project={project_u_1}/>
              <ProjectsCard project={project_u_2}/>
              <ProjectsCard project={project_u_3}/>
              <ProjectsCard project={project_u_4}/>
              <ProjectsCard project={project_u_5}/>
              <ProjectsCard project={project_u_6}/>
            </div>
          </div>
          <div id='personal-projects'>
            <Title subTitle='My Personal Projects' title='To Highlight My Zeal and Love For Tech' />
            <div className='grid'>
              <ProjectsCard project={project_p_1}/>
              <ProjectsCard project={project_p_2}/>
              <ProjectsCard project={project_p_3}/>
              <ProjectsCard project={project_p_4}/>
              <ProjectsCard project={project_p_5}/>
            </div>
          </div>
          <div id='other-passions'>
            <Title subTitle='My Other Passions' title='To Complement My Skills and Myself'/>
            <InfoCards/>
          </div>
          <div id='contact'>
            <Title subTitle='Contact Me!' title='Be It For Work or Just To Connect'/>
            <Contact/>
          </div>
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
