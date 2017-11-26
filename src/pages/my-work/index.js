import React from 'react';

import ProjectsData from '../../data/Projects'
import AppShowcase from '../../components/app-showcase'

const MyWork = (props) => {

    const projectItems = (object, index) => {
        return <AppShowcase
                    key={index + object}
                    project={object} />
    };

    return (
        <div>
            {ProjectsData.map(projectItems)}
        </div>
    );
};

export default MyWork;