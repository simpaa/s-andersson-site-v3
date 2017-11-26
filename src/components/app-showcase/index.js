import React from 'react';

import TextCard from '../text-card';
import LinkButton from '../link-button';
import './style.css';

const AppShowcase = ({project}) => {
    return (
        <TextCard>
            <img className='project-image' src={project.imageLink} alt={project.title}/>
            <h1 className="center">{project.title}</h1>
            <p>{project.description}</p>
            <LinkButton link={project.projectLink} target="_blank" rel="noopener noreferrer" text={project.buttonText} />
            <hr />
        </TextCard>
    );
};

export default AppShowcase;
