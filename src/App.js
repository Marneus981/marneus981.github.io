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
import QuickSection from './components/quickSection/quickSection'
import './config'
const App = () => {

  const [playState, setPlayState] = useState(false);
  const project0 = {
        institution: 'University of Nebraska-Lincoln',
        title: 'Neural Bioelectricity Project',
        date: '2023',
        summary: 'A project focused on understanding the neural bioelectricity in the human body.',
        skills: ['Python', 'Machine Learning', 'Data Analysis','Neuroscience', 'EEG Analysis'],
        description:'This project aims to explore the neural bioelectricity in the human body, utilizing advanced machine learning techniques and data analysis methods. The goal is to gain insights into the electrical activity of the brain and its implications for neuroscience.',
        user: 'marneus981',
        repoName: 'NeuralBioelectricityProject',
        showFullTitle: true,
        color: 'var(--un)',
        // img: 'https://example.com/image.jpg', // Add an image URL if needed
        githubCard: true,
    };
  const project1 = {
        institution: 'University of Nebraska-Lincoln',
        title: 'Machine Learning for Predictive Analytics',
        date: '2023',
        summary: 'A project that applies machine learning techniques to predictive analytics.',
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Analytics'],
        description: 'This project focuses on applying machine learning techniques to predictive analytics, aiming to develop models that can forecast future trends and behaviors based on historical data. It involves data preprocessing, model training, and evaluation.',
        user: 'marneus981',
        repoName: 'MAPPA',
        showFullTitle: true,
        color: 'var(--deux)',
        // img: 'https://example.com/image2.jpg', // Add an image URL if needed
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA4EAABAwIEBAMGAwgDAAAAAAABAAIDBBEFEiExBhNBUSJhcRQjMoGRoUKxwQcVFlJi0eHwM3KC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJREAAgIBBAEEAwEAAAAAAAAAAAECAxEEEiExQRMUIlFCYXEj/9oADAMBAAIRAxEAPwD3FERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEUK1U1EdNC6aZ+VjdyobS7BeRcfNx/Q09QY56SpbG02MgsbfJdBhOMUOLw82gqGyjqNiPkq4XVz4i8g2CIitAREQBERAEREAREQBERAEREAREQBEVioqoKZhfPI1jR3KhvAL6LRzcT0DH5Iy6R3YWCxZeLYmtBbSyHN8JL22OtrKp31ryDplFwuOn4uqPExlOxpBsXauH10C1knEOI1jGyQVM7Yb5XERBma/wAsw8rWXHuq/AbPQJ6iCnYXzzMjZ3e4ALX1WP4ZTRhxqQ++wiaX3+i4sTTTyRl8LntZdxJGc3v5nz6eqwq4SRG8s4gc9x95M4Ntfca+etgqJ63C4QinLo69/E0svONDQukEbLtc92XM69g0DuTZcjjvEXEEj209V+7ISTcU/PDZD8s11reLRIcLh/dtS8QQ1EPvQTqfF4vPxBv27heY49g3EuIYuH1WCSGd7Ws5lNASyYgWzl2oJO5JP0Uw3WrMpF2NvaO1xWtrKuMw1FMIJI3EuaDfppr1/Jbf9m08lNj0d3uZCScxJs2xHX5gLjKaLE6BkkddKJXU8bW/Fn3DiW362FhdXsPxbFYRG2nkY0O3DYh89ws+HXNSTXB24blwfSjHtcLtcHDuDdTcL5rZxzj1FUNbLOxrSfCIyG6eoA1XqHA/7RoMVliw/FssFY8hscn4ZD2PYr0VcumVOuSWT0VFA2Uq4rCIiAIiIAiIgCIiAKEKw62vZTMeWgPe0ai+y4nNQWWSk28IzLqHOyi5sB5rz3GuNsSZPHTYfSxvfJo1zQXWPmsTEMerf3VIJ6ts0z2HPlNmjy9VlnroKOUix0yXZ1+I4+3MY6JzHZD45NwPILlnvnraqaWeokLbZmROANtx/uq1uAwzSUlODG5wLLjTUG+63boY4wWSTsjaPwNfqB6DZYfdSsT38HLrl4NdPAyBtssrXSeFgBsfl36/dY7mOjjJp2ANa33bHkNZHcd/Xey2b5aEOaIzJVvYLARsB+V/osGPFp5KmZsGExtyfjdKHu+YB/SyzuyLS2ron035Zm4fQVskTBI10hdYOdZwaBY6a+dlk08dBQEtnrWF+cl8cRzOF+h7dPutJiFbiFbG5lTPNRxSuEZkawi1+1uiikjp6Gn5NGzltd4XZhdx0uTc6306jqufccbsYI2wT+2bzF5ZqmeDD8Ll9nicLyvitfL/ACtPQmx16AaarJ/hKjaGCR0hlcbl8YYLGxPUEn5krX0k8c00YhjLWxvD8520sBc9NB/u639dijaajllpBd2XwOnNmtdsdT+i2RnFrc+i1yysI4uqbFTV1Zg9Vb2Z9gSy1gTrbX8vTqtXWy4vEBSUmJQOhOl3RkuA2F7f2WWIY6iSSoEhqXvcXOc22Un/ALKxJMWvbGKumjaPwseDt6arLG2zc8LgvrjPH0aSSgqbe+lLnO1kkdoSPK2w/ssaIxQOytkc1wda17rojhXtlhapl6ktjIB+oUxcN/CWwE335jgLfRd7HPtkupZzJmgcWyGwiaSdC5zbj5KKHA5q2thjpo3Mk5jcr2t1bruF2lFw/M5ljy2N/pYT9yux4Z4fZQv9pkBMlrMzdPNa6NO8oiVsIRwjpIwWxtDjcgak9VUgReqjAFCKUBClQiEEoigoSCtVV4wyOYxU4bIW/FqsjGJHRYdMWGzi2wPquFpyKeINc600j9NL+qwarUyhNQiWQinydXBxDEZxFVNEd9nDZcfjL5o8UqaxszuSXHS+jgqMec6CUka66OBtf0WobiGeoyAMe4t0YRdpPcrG9T6v+cu0aKo7eUbPku9ivQxu9oktdwOovuSsN8NPS0xpJ3e1VAJu1mgHW5WRh4q65xpTiMcMjtWtiAs7yVNYxuH0wlA8IIDzvv8A5WS6csYx/C1RWc9spoqiqlpx7S/KI48gEegtoppqenp2uyMM7neIyC9yR59/LqqWZ45zL4cj2jwje46hRypvbDVSyZmlujMxY35nqsldu7LkyqxtmQZIxAIyZY4hfPmsMvXqLlYsNW2WmfUuY/X4HyC2cAi1gNb36q+yRzHiSeSljkOltXEDtruFiOdz5XZDzC1hD3yWa1jb7339Nbq9T44KdvBcdJRzvZE11SaljveZmudkNtiPtdZeGULqx73StEbGj3kjhoPW/XoFOEUDq0OdLMWU5IdmLiG+dm3tby133UYk58sjYaWKR+Hwu+GPaU+ZHS+/0T0t819HddOXliXGhHUPw3hylNXUX8czx4I7fzO207brV47FiUkrm4jivNe4D/gbYDuNd+n9ls6OsfHS8t8Yh3a2MMtkB7AegWdHRRzZXvdd2mo7LaoqKwkaltijlqfCgXtjAmqxmBJmdmI9Oi66ioGxQsDWAFp0cddDuLLKgpo2WyttYLJZDpqd1ZCvPLKrL/CLTKaNpOdxcTcWA0ssmKBl7tj17lVRxtFh1K22H0JBEkzbW2aVtrgZZSb7K6Cha1okmbd51A7LYIFK1pYKwiKFICIiEBERASoKlChJpeKJjHQMY12V0krQDa65atDRE5zL54/A7KL36kXW+43n9no6WQMzuFQA1v8AMuXNTnwt754zGbua9nVpvZeTq4uU55+ki+tcI0HEOLObTiCItGXVkw1voL202XHfvicVUfPy3vYOAtddthFIxlVPHVMZNQ391mGgN/8AbrArsIlmx8U8sYDaNxmcCLBobsBYdfosUZ1xeFz9s0qaUcF/EKVsBidy2BxAdma8gtW2w+QYtHJFKQ6GINE2upudCFqcVmEjcrXOIubZjrssbB8fgwaQ1UmaVsVuaxttWk6/oVCsd0m8EQZ21Tg7JXcwjmMuCARt5/JY81A1rnOa/R2t3Hf5XVH78lr6h1fh2d9BGRZ4Gh8rLKmjq6ip/G1paCW3Atfz6Kv2ieQ61Lk1EjZoC8RScomwOTQ29VDaKoe9lPO9xic7NYElpPcrbVFIKiUXhOQusBYXOlrX9Qr1SY8Ow2LKDzJCczrWHnZHp40wc3zgcIs4g6m5AjDSbBpcTrewGi1dRiLS4MzytBFgGyWa0enZYlZV6GxsLbrTOfJUNkIFw0dSstUrLbE+jqJs6CV9ZXhzXO5cZ+K51PkutpS3RpvmPUrQcPU/JpmNkJLyOu633NipmZnuFwF7cIcnFs0uEZoDhsNO6xq3EIKONz5pdGi5AWkr8fABDXCNgHxX1K5qtrXVjiSXcofC3ue5VkpbFwVQqc3yer8IVNPidAa1kZDxIWeI3tZdEvOP2UVha2vpXm13CRg+VivQuaFt08t1aZTYtssF5QrQlCnmhXHBcRW+YmcIQXEVGcJnCnAK0VGdQoBdUKVCEmh4tmZBSQyP0ayTOTbYAarg/aqqrNUZGMFNLaSC+8hvfN9Oi9OxKhjr4OVIbWNwbXXnfEGF11JVOpo3FtPIDeQH4R/SP0Xm6qtxnvfRfW10UObJEwAR20zW7X1WRhsoq6yQVXNz1DA2SSM2c6xFrk+V/VWKeRpZFRSyB9SyINY92gnA037/AJrJiLaRsrpGyiTJkjy2sCRrf5Lxp1SrsynmJZJN9HLYrTE82FrrakEkWI6LmX4Tq9s8xdHcg2bbT1Xay079Xcv/ANE2stDiZZACAM4J3BuB/lX6SFkf0WRjjsq4XxmXDKGkw2B5cwVF3G189iLA/Jehvq2uqJM8d84ADmjbrqvH6apbHXeA5Xse2SM9F6Bg+LB7ZDmBdILkO6LdJc8ks2FcZaRkUksriwSA6OuXaG1/K/RaTE8Qnrql7pHEk6NGwaBsLdFvJS2phcxzzZ+9tguefC+OVweLOH3HdYtTBvGeiH0ayeV7WEH7rJwn378sha1rTfK3qseuY8+7iBzDUkW/VWYZnUsua/hIynuudPXtaZzu4O1NTTUkV/De291z1XX1OK1oo6BpcSdxsPMrQ1+LPnlEcWbJ3XRYHjGF0dHZsjIpB/yFw1J9V7MYJdlDy+jA4r4frsNYyrZJ7RT2AkDPwFaamqOaAMw03W0xriepr3SU8U5io9i1ts0g8z0CwqWgcLun5UMDRcgO1A8ws1uHLg1Vt7eTouDMRFDjkJefBJ4HHtf/ADZeria68MhgjmLXQvcNdMrl6ZgGMtrKGOz3GWMZJAd7jutGmsS+Jnvj+R1IlU81a5k99zqrglWzJnM4Sqeb5rDbJdVByAy+anMWLmU3KkGVzFKxfF3RQDbIiKQUv0C1+IULa2ItkHp5FbFwurZ7G6iSTTT8hcHmmMYSKd5jqopDGScr2jW/kViwzCVhgrZppGsb4JWs8Rb/AFDqfNpK9RfGxws4AjsVq6vh7Dp7kRctx3LDb7bLz5aFxWK3x9MuhZjs8YxzHcKp5pKaKKse7rLMSy//AJ0+652fGnzm8UTtD4V7BjfAjalp5IppgXfDM0gj5rjsc4OqMEhdVUtNywSGuiA5jbXGoOlj8kVc4rLRerE+mcBBBWOqDOAHG/QrfUOIVlOW5oH/AC1XY4Zg1U6nDq7hozFw8M8UuRwud7D9VXHTMpJWmSlqha2ds9ISB3sW7/VQ5r8kxub6MCi4gIjGalqHEb5Y7q2/G5K6r9mGHz0zng8uombYZux7X7rq2Y9h9DEHTYdJlsNY2OH0zAfmt1h0uC8RUrxSPjmFrvjcMrmg9wfz9VdGuE1gpk5ReWjzuFs7oBzoXMk1BDhYgjusKqbkc0nReh4jwtO2ne2hJmNvA15s5o7X6hch/CmP873lC9zR2cNfus8tI08o63Ra7NBymWvkc1x1JYFYNFQllxNJc7uGv5LrY+DsZc/MKdsf/eQLKZwDWS+Kd1O0ne11YvUfgn4LyefnD6V5aHVM9nmw8Cyv4ZrXNIp5JiCbm69Hw7gaWirm1JqmGMfFEWXBXUw4XEwDwgq6NcpL5I5duOjyTA8FrqMvjrI3Bj9n+azcNosbocRnfQAOYX6eh1svVjhcEsTmFoAKowjBWYeJM0nNc51wSALeSj0PmPW+P7OewvEKiWpZTV9FNFI/4ZGt8BP6Lo2U5A0WwbExpuGC/dVBoC0Ri1wUNpmG2BViELJspXWDksCJVCMK8FOikFnlorwARAZCKFKEg7K0d7lXVQWhAWym6ryhUkWUgpcFbdGCLWCuqLJgFrljsEMYKvBqktsoBiPo4Xiz4mOHYtCxaXAsNpKo1dLTNhmcMpLCQCPRbSyiybUMlAAtYKCwE7KtAusEFrIOygxi97K/ZQQowCzk8lIZcq7ZS0aqMABvhAU2VdkyrpAosllXZQQgKLJZVIoBRZFUlkBAKKUQF5SiKCQqXIiApKHZEQgoUs+JSikkk6FSoRQClQiLpEEFQERAVqERAFLd0RSC4NkRFyCFKhEAIVKIgIREQBERAf/Z',
        githubCard: false,
    };
  /*Variables*/
    const project_w_1 = {
    institution: 'Medica Providencia Clinic',
    title: 'PEY VR Technical Assistant',
    date: '12/2022 - 03/2023',
    summary: 'Administered and documented licensed Nesplora tests to patients for Neurodivergence diagnosis. Performed maintenance and troubleshooting on Oculus Quest VR Equipment used in tests.',
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
    summary: 'Worked alongside key stakeholders to produce a large video project for OISE. Created engaging video description generation algorithms for a project spanning close to 200 videos, using Python ML and Excel. Managed a large institution-sanctioned video project on YouTube.',
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
    summary: 'Attended to customers in both the pharmacy and toy store sections of the clinic. Performed secretarial endeavours when the need arose or we were short-staffed.',
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
    summary: 'Researched network performance of horizontal aggregation of ML models in distributed environments (C++/Python). Co-authored technical papers and presentations pertaining to the created aggregation algorithms and research. Developed an aggregation algorithm that increased network efficiency by 100% while keeping similar performance',
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
    user: 'marneus981',
    repoName: '',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: true,
    };

    const project_u_2 = {
    institution: 'University of Toronto Project',
    title: 'UNIX-based Operative System Development',
    date: '01/2021 - 06/2021',
    summary: 'Developed a UNIX-based Operative System from scratch (C/Assembly). Co-developed UX ti satidy customer needs. Implemented multi-threading capabilities on an Operative System.',
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
    user: 'marneus981',
    repoName: '',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: true,
    };

    const project_u_3 = {
    institution: 'University of Toronto Project',
    title: 'MAPPA C++ Geographical Information System',
    date: '09/2019 - 06/2020',
    summary: 'Co-developed UI/UX suited to stakeholder needs. Improved algorithm efficiency by 200% and reduced memory by 50% for the GIS system (C++). Built a GIS system using "OpenStreetMap" API data and the C++ EZGL Library.',
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
    repoName: '',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: true,
    };

    const project_u_4 = {
    institution: 'University of Toronto Project',
    title: 'Optical Music Recognition: Music Sheet Transcriber',
    date: '01/2021 - 06/2021',
    summary: 'Designed a hybrid CRNN model, to interpret sheet music by predicting image sequences (Python). Utilized Python ML libraries to handle, preprocess, visualize and analyze over 100,000 sheet music (PrIMuS Dataset).',
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
    repoName: '',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: true,
    };

    const project_u_5 = {
    institution: 'University of Toronto Project',
    title: 'Virtual Piano in Verilog/Assembly',
    date: '09/2019 - 12/2019',
    summary: 'Implemented a virtual piano on an FPGA board and generated an encoding capable of translating any song into a readable format by said piano (Verilog/Assembly).',
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
    summary: 'Assimilated multiple systems into a wholistic simulation of neural signal transmission and propagation using MATLAB.',
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
    summary: 'Developing a set of software tools with planned AI integration for playing and creating TTRPG Games (C++/Python). Implemented automated debugging and scripting for all different software components.',
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
    repoName: '',
    showFullTitle: true,
    color: 'var(--un)',
    img: '',
    githubCard: true,
    };

    const project_p_2 = {
    institution: 'Game Project (On Hold)',
    title: 'Magia Chef',
    date: '06/2023 - 10/2024',
    summary: 'Developing a 3D roguelike shooter videogame, using the Unity game engine (C#). Sculpted and animated in-game 3D assets from scratch using Blender (learned the skill in 1 week).',
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
    repoName: '',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: true,
    };

    const project_p_3 = {
    institution: 'Open Source Project (On Hold)',
    title: 'VKnob',
    date: '02/2024 - 10/2024',
    summary: 'Developing an overlay application to control multiple Digital Audio Workstations at the same time (C++). Automated UI calls in Windows with the use of UIAutomation for Windows.',
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
    repoName: '',
    showFullTitle: true,
    color: 'var(--trois)',
    img: '',
    githubCard: true,
    };

    const project_p_4 = {
    institution: 'Game Project',
    title: 'Untitled RPG Game Project',
    date: '04/2025 - Ongoing',
    summary: 'Developing a 2D Action RPG concept Game using the Unity Game engine.',
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
    summary: 'Portfolio (This page!) developed from scratch using ReactJS, CSS and HTML.',
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
    repoName: '',
    showFullTitle: true,
    color: 'var(--deux)',
    img: '',
    githubCard: true,
    };
    const section_1 = ['hey','yo','what'];
  return (  
    <div>
        {/* Navigation bar / Container */}
        <Stripes/>
        <Navbar/>
        {/* Background section */}
        {/* <Hero/> */}
        <div className='container_2'>
          <AboutMe/>

          <Title subTitle='University and Beyond' title='My Education'/>
          
          <QuickSection texts={section_1}/>

          <Title subTitle='In My Community' title='My Volunteer and Leadership Positions'/>
          
          <Title subTitle='Recognised Accomplishments, In and Out of University' title='My Awards and Scholarships'/>


          <Title subTitle='My Work Experience' title='The Places I Have Worked At'/>
          
          <div className='grid'>
            <ProjectsCard project={project_w_1}/>
            <ProjectsCard project={project_w_2}/>
            <ProjectsCard project={project_w_3}/>
            <ProjectsCard project={project_w_4}/>
          </div>

          <Title subTitle='My University Projects' title='To Contribute To YOUR Continued Success' />
          <div className='grid'>
            <ProjectsCard project={project_u_1}/>
            <ProjectsCard project={project_u_2}/>
            <ProjectsCard project={project_u_3}/>
            <ProjectsCard project={project_u_4}/>
            <ProjectsCard project={project_u_5}/>
            <ProjectsCard project={project_u_6}/>
          </div>

          <Title subTitle='My Personal Projects' title='To Highlight My Zeal and Love For Tech' />
          <div className='grid'>
            <ProjectsCard project={project_p_1}/>
            <ProjectsCard project={project_p_2}/>
            <ProjectsCard project={project_p_3}/>
            <ProjectsCard project={project_p_4}/>
            <ProjectsCard project={project_p_5}/>
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
