import { React, useState, useEffect } from 'react';
import { skills } from '../Details/Details';

function Skills() {
    const [skill, set_skill] = useState([]);

    useEffect(() => {
        const skillElements = skills.map((skill, index) => (
            <div className='a_single_skill'><p key={index} className='single_skill'>{skill}</p></div>
        ));

        set_skill(skillElements);
    }, [])

    return (
        <>
            <div className='skill_parent'>
                <h1 className='work_exp_h1'>Skills</h1>
                <div className='skills'>{skill}</div>
            </div>
        </>
    );
}

export default Skills;

