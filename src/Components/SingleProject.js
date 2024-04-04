import { React, useState, useEffect } from 'react';
import youtube from '../Image/youtube.gif';
import github from '../Image/github-2.gif';

function SingleProject(props) {
    useEffect(() => {
        if (props.index < props.size - 1) {
            document.getElementById("a_single_project").style.marginBottom = "20px";
        }
    }, [])

    return (
        <>
            <div id='a_single_project'>
                <div className='a_single_project_child'>
                    <div className='project_info'>
                        <p className='project_name'>{props.project_name}</p>
                        <div className='project_buttons'>
                            <a href={props.youtube} target='_blank' rel="noreferrer"><img src={youtube} alt=''></img></a>
                            <a href={props.github} target='_blank' rel="noreferrer"><img src={github} alt=''></img></a>
                        </div>
                    </div>

                    <p className='proj_tech_stack'><span className='tech_stack_color'>Tech stack : </span>{props.tech_stack}</p>
                    <p className='project_description'>{props.description}</p>
                </div>
            </div>
        </>
    );
}

export default SingleProject;

