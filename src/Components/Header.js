import React from 'react';
import myphoto from '../Image/me.jpg';
import codeforces_icon from '../Image/code-forces.svg';
import leetcode_icon from '../Image/leetcode.svg';
import github_icon from '../Image/github.svg';
import insta_gram_icon from '../Image/instagram.svg';
import twitter_icon from '../Image/twitter.svg';
import linkedin_icon from '../Image/linkedin.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Home() {
    function menu_control() {
        if (document.getElementById("links").style.height === "0px") {
            document.getElementById("links").style.height = "320px";
            document.getElementById("links").style.opacity = "1";
        } else {
            document.getElementById("links").style.height = "-0px";
            document.getElementById("links").style.opacity = "0";
        }
    }

    return (
        <>
            <div className='header_parent'>
                <div className='my_photo'>
                    <img src={myphoto} alt='' className='my_image'></img>
                </div>
                <p className='my_name'>Bhaskar</p>

                <div id='links'>
                    <a href="https://codeforces.com/profile/bhaskar_op" target='_blank' rel="noreferrer"><img src={codeforces_icon} alt=''></img></a>
                    <a href="https://leetcode.com/bhaskar_op/" target='_blank' rel="noreferrer"><img src={leetcode_icon} alt=''></img></a>
                    <a href="https://github.com/bhaskar4k" target='_blank' rel="noreferrer"><img src={github_icon} alt=''></img></a>
                    <a href="https://www.instagram.com/brainlagged_engineer/" target='_blank' rel="noreferrer"><img src={insta_gram_icon} alt=''></img></a>
                    <a href="https://twitter.com/JoshraK_4K" target='_blank' rel="noreferrer"><img src={twitter_icon} alt=''></img></a>
                    <a href="https://www.linkedin.com/in/bhaskar-nandy/" target='_blank' rel="noreferrer"><img src={linkedin_icon} alt=''></img></a>
                </div>

                <FontAwesomeIcon icon={faBars} id="menu_btn" onClick={menu_control} />
            </div>
        </>
    );
}

export default Home;

