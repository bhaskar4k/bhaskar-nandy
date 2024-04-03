import { React, useState, useEffect } from 'react';
import myphoto from '../Image/me.jpg';

function MyInfo() {
    return (
        <>
            <div className='my_info'>
                <div className='name_and_all'>
                    <h1 className='my_name_on_body'>Hi, I'm</h1>
                    <h1 className='my_name_on_body'>Bhaskar Nandy...</h1>
                    <p className='who_i_am'>A <span className='problem_solver'>Problem Solver....</span></p>
                </div>
                <div className='my_pic'>
                    <img src={myphoto} alt=""></img>
                </div>
            </div>
        </>
    );
}

export default MyInfo;

