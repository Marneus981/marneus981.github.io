import React, { useEffect, useRef  } from 'react';
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";
import './projectsCard.css'

const ProjectsCard = ({ project }) => {


    // Idea:
    // Create a card component that displays project details

    //On the left side:
    //Project Image (large) or Github card

    //On the middle:
    //Project Institution (colored;small caps)
    //Project Title (bold;large)
    //Project Summary (normal;medium)
        //See more (lenghtier text;small;dropdown)
            //Make sure description does not overflow in reference to the github card

    //On the right side:
    //Project Skills displayed as tags (uncolored at first, colored on hover,
    //random color amongst those on config.css)        
        return(
        <div className='card'>
            <div className='card_left'>
                <RepoCards 
                    repoDetails={[{
                        user: project.user,
                        repoName: project.repoName,
                        showFullTitle: project.showFullTitle,
                    },]}
                    />
            </div>
            <div className='card_middle'>
                <span className='card_institution'>{project.institution}</span>
                <h2 className='card_title'>{project.title}</h2>
                <p className='card_summary'>{project.summary}</p>
                <button className='card_see_more'>See more</button>
            </div>
            <div className='card_right'>
                {project.skills.map((skill, index) => (
                    <span key={index} className='card_skill'>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default ProjectsCard;