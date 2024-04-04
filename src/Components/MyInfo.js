import { React, useState, useEffect } from 'react';
import { resume_gdrive_link } from '../Details/Details'
import myphoto from '../Image/me.jpg';

function MyInfo() {
    return (
        <>
            <div className='my_info'>
                <div className='name_and_all'>
                    <h1 className='my_name_on_body'>Hi, I'm</h1>
                    <h1 className='my_name_on_body'>Bhaskar Nandy...</h1>
                    <p className='who_i_am'>A <span className='problem_solver'>Competitive Programmer....</span> ,</p>
                    <p className='who_i_am left_margin'><span className='problem_solver'>Software Engineer....</span> ,</p>
                    <p className='who_i_am left_margin'><span className='problem_solver'>Problem Solver....</span> ,</p>
                    <p className='who_i_am left_margin'><span className='problem_solver'>Mentor....</span></p>

                    <a href={resume_gdrive_link} target='_blank' rel="noreferrer"><button className='download_resume'>Resume</button></a>
                </div>
                <div className='my_pic'>
                    <img src={myphoto} alt=""></img>
                </div>
            </div>
        </>
    );
}

export default MyInfo;

