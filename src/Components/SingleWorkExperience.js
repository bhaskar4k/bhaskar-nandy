import { React, useState, useEffect } from 'react';
import icra_analytics from '../Image/icra_analytics.png';
import cognizant from '../Image/cognizant.png';

function SingleWorkExperience(props) {
    let logo_name = null;
    if (props.org_name === "ICRA Analytics Ltd.") logo_name = icra_analytics;
    else logo_name = cognizant;

    useEffect(() => {
        if (props.index < props.size - 1) {
            document.getElementById("a_single_work_exp").style.marginBottom = "20px";
        }
    }, [])

    return (
        <>
            <div id='a_single_work_exp'>
                <div className='work_exp_child'>
                    <div className='company_info'>
                        <div className='company_logo'>
                            <img src={logo_name} alt=''></img>
                        </div>
                        <div className='company_details'>
                            <p className='designation'>{props.designation}</p>
                            <p className='company_name'>{props.org_name}</p>
                            <p className='duration'>{props.starting_date} - {props.ending_date}</p>
                        </div>
                    </div>
                    <p className='tech_stack'><span className='tech_stack_color'>Worked on :</span> {props.tech_stack}</p>
                </div>
            </div>
        </>
    );
}

export default SingleWorkExperience;

