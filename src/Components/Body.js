import { React, useState, useEffect } from 'react';
import CodingAchievement from '../Components/CodingAchievement';
import MyInfo from '../Components/MyInfo';
import WorkExperience from '../Components/WorkExperience';
import Projects from '../Components/Projects';

function Body() {
    return (
        <>
            <div className='body_parent'>
                <MyInfo />
                <CodingAchievement />
                <WorkExperience />
                <Projects />
            </div>
        </>
    );
}

export default Body;

