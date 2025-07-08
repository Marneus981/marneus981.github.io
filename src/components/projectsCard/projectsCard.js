import React, { useEffect, useRef, useState  } from 'react';
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";
import './projectsCard.css'

const ProjectsCard = ({ project }) => {
    const [showMore, setShowMore] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);

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
        <div className='card' style={{ border: `3px solid ${project.color}`}} >

            <div className='card_left'>

                {project.githubCard ? (
                    <RepoCards 
                        repoDetails={[{
                            user: project.user,
                            repoName: project.repoName,
                            showFullTitle: project.showFullTitle,
                        },]}
                    />
                ) : (
                    <img
                        src={project.img}
                        alt={''}
                        className="card_img"

                    /> 
                )}

            </div>
            <div className='card_middle'>
                <span className='card_institution' style={{ color: project.color }}>{project.institution}</span>
                <h2 className='card_title'>{project.title}</h2>
                <p className='card_summary'>{project.date}</p>
                <p className='card_summary'>{project.summary}</p>


                {/* <button className='card_see_more'>See more</button> */}
            </div>
            <div className="card_bottom" style={{ marginTop: 'auto' }}>
                <h6>
                    {showMore ? project.description : ''}
                    <button onClick={() => setShowMore(!showMore)} 
                        className='card_see_more' style={{
                            borderLeft: `3px solid ${project.color}`,
                            borderRight: `3px solid ${project.color}`,
                            borderTop: '3px solid transparent',
                            borderBottom: '3px solid transparent',
                            background: project.color,
                            }}
                    >
                        {showMore ? 'Hide Relevant Skills' : 'Show Relevant Skills'}
                    </button>
                </h6>
                {showMore && (
                    <div className='card_right'>
                        {project.skills.map((skill, index) => (
                            <span
                                key={index}
                                className='card_skill'
                                style={{
                                    backgroundColor: hoveredSkill === index ? project.color : 'transparent',
                                }}
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectsCard;