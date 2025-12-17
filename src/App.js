import React, { useState } from 'react'
// import About from './components/unused/about/about'
// import Campus from './components/unused/campus/campus'
// import Testimonials from './components/unused/testimonials/testimonials'
// import Hero from './components/unused/hero/hero'
// import Programs from './components/unused/programs/programs'
// import VideoPlayer from './components/unused/videoPlayer/videoPlayer'


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
    summary: 'Reduced weekly downtime  by half through systematic diagnostics and repair, as well as hardware troubleshooting on Oculus Quest VR equipment. Improved satisfaction scores by 25%  by collaborating with healthcare professionals during VR NESPLORA testing, to offer more client-based experiences.',
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
    institution: 'Ontario Institute for Studies in Education',
    title: 'Script Programmer and Video Project Editor',
    date: '03/2022 - 05/2022',
    summary: 'Developed video description generation algorithms using Python ML and Excel, for a large video project (200+ videos). Enhanced stakeholder satisfaction and met deliverables expectations within 3 months by collaborating with key stakeholders to align project goals.',
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
    title: 'Secretary and Sales Associate',
    date: '08/2015 - 07/2018',
    summary: 'Streamlined operations by efficiently managing secretarial tasks during peak hours, decreasing task time by 10%. Increased sales operations at the pharmacy and store sections of the clinic by 5% on average.',
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
    title: 'Freelance Software Developer and 3D Designer',
    date: '07/2023 - 09/2024',
    summary: 'Implemented AI pipelines which increased reliability by up to 200%, while reducing endpoint runtime by 30%. Raised Full-Stack contributions to Open Source and Private Machine Learning software systems. Implemented UI/UX systems for startups using common Front-End technologies, such as React.js, Node.js, Tkinter, Figma, etc.',
    skills: [
        //Programming Languages
        'C++',
        'Python',
        'HTML5',
        'CSS',
        'JavaScript',
        // Hard skills (alphabetical)
        '3D Animation',
        '3D Modelling',
        '3D Printing',
        'Blender',
        'Product Design',
        'Slicing Software',
        'Texturing',
        'Retrieval-Augmented Generation (RAG)',
        'Natural Language Processing (NLP)',
        'Full-Stack Development',
        'Big O Space/Time Code Optimization',
        'Object-Oriented Design Methodologies',
        'Data Structures and Algorithms',
        'Version Control with Git',
        'AI Coding Tools (Copilot)',
        'Python ML: Tensorflow, Scikit-Learn, Pytorch, Numpy, Keras, Pandas',
        'JavaScript ML',
        'LLMs',
        'LLM APIs',
        'Node.js',
        'React.js',
        'Tkinter',
        'Figma',
        'UI/UX Design',
        'Web Development',
        'RESTful APIs',
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
    institution: 'University of Toronto Capstone Project | Open Source Contribution',
    title: 'Horizontal Federated Learning Research',
    date: '09/2021 - 06/2022',
    summary: 'Doubled network efficiency of distributed Federated Machine Learning model aggregation (C++/Python). Maintained model performance comparable to benchmark for all models, while implementing novel Machine Learning architectures. Co-authored technical papers and presentations on novel aggregation algorithms.',
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
    summary: 'Built an UNIX-based operating system from scratch (C / Assembly). Co-developed user experience features based on customer needs and implemented support for multi-threading at the kernel level.',
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
        'Concurrent Programming',
        'Multhreaded Implementations',
        'Back-End Development',
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
    summary: 'Built GIS system using OpenStreetMap API data and the C++ EZGL library, backed by user-centrist Front-End UI/UX systems powered by robust Back-End. Improved search algorithm efficiency by 200% and reduced memory usage by 50%.',
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
        'Linux Development',
        'OOP Design Methodologies',
        'OpenStreetMap API',
        'Search Algorithms',
        'Software Development',
        'Software Development Cycle',
        'UI/UX Design',
        'Version Control with Git',
        'Full-Stack Development',
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
    summary: 'Designed a hybrid CRNN model to interpret sheet music by predicting image sequences (Python). Achieved near benchmark performance with at least 50% reduced resource usage. Processed, visualized, and analyzed 100,000+ samples from the PrIMuS dataset using Python ML libraries',
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
    summary: 'Implemented a virtual piano on FPGA board (Verilog/Assembly) and developed an audio encoding system for it. Streamlined user experience by creating state machines to implement application logic for the piano on FPGA boards.',
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
    summary: 'Researched neural signal transmission and propagation, and its parallels in Machine Learning. Simulated neural signal transmission and propagation using MATLAB.',
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
    summary: 'Developing software tools with planned AI integration for playing and creating TTRPG Systems (C++/Python). Implemented robust automated debugging and scripting for all software components and tools.',
    skills: [
    // Hard skills (alphabetical, max 6)
    'Automated Testing',
    'C++',
    'Python',
    'Python ML',
    'Software Development',
    'Version Control with Git',
    'Full-Stack Development',
    'Back-End Development',
    // Soft skills (alphabetical, max 6)
    'Creative Problem Solving',
    'Fast Learning',
    'Proactiveness',

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
    summary: 'Developing a 3D rogue-like shooter video game, using the Unity game engine (C#). Sculpting and animating in-game 3D assets from scratch using Blender and Unity.',
    skills: [
    // Hard skills (alphabetical, max 6)
    '3D Animation',
    '3D Modeling',
    '3D Texturing',
    'C#',
    'Unity',
    'Unity 3D',
    'Full-Stack Development',
    'Version Control with Git',
    // Soft skills (alphabetical, max 6)
    'Adaptability',
    'Creative Problem Solving',
    'Fast Learning',
    'Proactiveness',
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
    summary: 'Developing overlay application to enable cross functionality across multiple Digital Audio Workstations (C++) using UIAutomation for Windows.',
    skills: [
    // Hard skills (alphabetical, max 6)
    'Automated Testing',
    'C++',
    'Software Development',
    'Software Development Cycle',
    'UIAutomation',
    'Version Control with Git',
    'Full-Stack Development',
    // Soft skills (alphabetical, max 6)
    'Creative Problem Solving',
    'Fast Learning',
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
    summary: 'Developing a 2D action role-playing game using the Unity game engine (C#). Edited and animated 2D sprites and assets using Unity, Photoshop and Gimp.',
    skills: [
    // Hard skills (alphabetical, max 6)
    '2D Animation',
    '2D Sprites',
    'ARPG Games',
    'C#',
    'Game Programming',
    'Unity',
    'Full-Stack Development',
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
    summary: 'Developed portfolio website from scratch using JavaScript, React.js, Node.js, CSS and HTML. Implemented multiple features ranging from mailing list integration to complex UI systems for improved user experience and flair.',
    skills: [
    // Hard skills (alphabetical, max 6)
    'CSS',
    'HTML',
    'React.js',
    'Node.js',
    'Version Control with Git',
    'Front-End Development',
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

    const project_p_6 = {
    institution: 'Open Source Project',
    title: 'Project Sisyphus',
    date: '07/2025 - Ongoing',
    summary: 'Developed Natural Language Processing tool for job applications;  increased efficiency on edge devices by 70% with model quantization and algorithm optimization. Increased output reliability by 150% and halved runtime by implementing model quantization and more robust Front-End and Back-End systems and tools.',
    skills: [
        // Hard skills (alphabetical)
        'Automated Testing',
        'Back-End Development',
        'Data Science',
        'Machine Learning',
        'Artificial Intelligence',
        'Python',
        'Python ML',
        'JavaScript ML',
        'LLMs',
        'LLM APIs',
        'META LLaMA',
        'Ollama',
        'HuggingFace',
        'Local LLMs',
        'Model Fine-Tuning',
        'Natural Language Processing',
        'Software Development',
        'Full-Stack Development',
        'Version Control with Git',
        'UI/UX Design',
        'Tkinter',
        // Soft skills (alphabetical)
        'Adaptability',
        'Analytical Problem-Solving',
        'Conflict Resolution',
        'Creative Problem-Solving',
        'Good Written and Communication Skills',
        'Proactiveness',
        'Results Oriented',
        'Time Management'
    ],
    description: '',
    user: 'Marneus981',
    repoName: 'Project_Sisyphus',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: true,
    };

    const project_p_7 = {
    institution: 'Open Source Project',
    title: 'Project Calliope',
    date: '08/2025 - Ongoing',
    summary: 'Implementing Back-End frameworks powered by Retrieval Augmented Generation to create companion assistant for use with any Tabletop RPG rule system.',
    skills: [
        // Hard skills (alphabetical)
        'Automated Testing',
        'Back-End Development',
        'Data Science',
        'Machine Learning',
        'Artificial Intelligence',
        'Python',
        'Python ML',
        'JavaScript ML',
        'LLMs',
        'LLM APIs',
        'META LLaMA',
        'Ollama',
        'HuggingFace',
        'Local LLMs',
        'Model Fine-Tuning',
        'Retrieval-Augmented Generation',
        'Software Development',
        'Back-End Development',
        'Version Control with Git',
        // Soft skills (alphabetical)
        'Adaptability',
        'Analytical Problem-Solving',
        'Conflict Resolution',
        'Creative Problem-Solving',
        'Good Written and Communication Skills',
        'Proactiveness',
        'Results Oriented',
        'Time Management'
    ],
    description: '',
    user: 'Marneus981',
    repoName: 'Project_Calliope',
    showFullTitle: true,
    color: 'var(--un)',
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
      ,'Represented students as part of the Scholarship Committee at the Faculty of Engineering (University of Toronto), distributing and voting on awards and scholarships for students. Collaborated as part of a multi-disciplinary committee, providing impactful decisions to benefit students faculty-wide.'
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
      ,'Achieved highest scholar denomination upon faculty entry, and successfully maintained it throughout entire career.'
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
              <ProjectsCard project={project_p_6}/>
              <ProjectsCard project={project_p_7}/>
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
