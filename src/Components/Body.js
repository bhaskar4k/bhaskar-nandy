import { React, useState, useEffect } from 'react';
import CodingAchievement from '../Components/CodingAchievement';
import MyInfo from '../Components/MyInfo';
import WorkExperience from '../Components/WorkExperience';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

function Body() {
    return (
        <>
            <div className='body_parent'>
                <MyInfo />
                <CodingAchievement />
                <WorkExperience />
                <Projects />
                <Skills />
            </div>
        </>
    );
}

export default Body;

