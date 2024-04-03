import { React, useState, useEffect } from 'react';
import SingleWorkExperience from '../Components/SingleWorkExperience';
import { work_experience } from '../Details/Details';

function WorkExperience() {
    const [experience, set_experience] = useState([]);

    useEffect(() => {
        let exp = [];
        for (let i = 0; i < work_experience.length; i++) {
            exp.push(<SingleWorkExperience
                index={i}
                size={work_experience.length}
                org_name={work_experience[i].org_name}
                starting_date={work_experience[i].starting_date}
                ending_date={work_experience[i].ending_date}
                designation={work_experience[i].designation}
                tech_stack={work_experience[i].tech_stack} />
            )
        }

        set_experience(exp);
    }, [])

    return (
        <>
            <div className='work_exp_parent'>
                <h1 className='work_exp_h1'>Work Experience</h1>
                {experience}
            </div>
        </>
    );
}

export default WorkExperience;

