import { React, useState, useEffect } from 'react';
import CodingAchievement from '../Components/CodingAchievement';
import MyInfo from '../Components/MyInfo';

function Body() {
    return (
        <>
            <div className='body_parent'>
                <MyInfo />
                <CodingAchievement />
            </div>
        </>
    );
}

export default Body;

