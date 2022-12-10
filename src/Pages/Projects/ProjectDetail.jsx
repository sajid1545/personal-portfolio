import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetail = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <h1 className='text-5xl text-white'>Helooooooooooooooooooo</h1>
        </div>
    );
};

export default ProjectDetail;