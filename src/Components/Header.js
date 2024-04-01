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
        console.log(document.getElementById("links").style.height)
        if (document.getElementById("links").style.height === "0px") {
            document.getElementById("links").style.height = "490px";
        } else {
            document.getElementById("links").style.height = "-0px";
        }
    }

    return (
        <>
            <div className='header_parent'>
                <div className='my_photo'>
                    <img src={myphoto} alt='' className='my_image'></img>
                </div>
                <div className='my_name'>Bhaskar Nandy</div>

                <div id='links'>
                    <a href="a" target='_blank'><img src={codeforces_icon} alt=''></img></a>
                    <a href="a" target='_blank'><img src={leetcode_icon} alt=''></img></a>
                    <a href="a" target='_blank'><img src={github_icon} alt=''></img></a>
                    <a href="a" target='_blank'><img src={insta_gram_icon} alt=''></img></a>
                    <a href="a" target='_blank'><img src={twitter_icon} alt=''></img></a>
                    <a href="a" target='_blank'><img src={linkedin_icon} alt=''></img></a>
                </div>

                <FontAwesomeIcon icon={faBars} id="menu_btn" onClick={menu_control} />
            </div>
        </>
    );
}

export default Home;

