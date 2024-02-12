import { React, useState } from 'react';
import '../CSS for Components/Body.css'
import '../CSS for Components/MediaQueries.css'
import myphoto from '../Image/me.jpg';
import wave from '../Image/wave.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Body() {
    const [control_icon, set_control_icon] = useState(faEye);
    function handle_control() {
        if (control_icon === faEye) {
            set_control_icon(faEyeSlash)
        } else {
            set_control_icon(faEye)
        }
    }

    return (
        <>
            <div className='main_body'>
                <div className='container'>
                    <div className='welcome_class'>
                        <div className='wave_container'>
                            <img src={wave} alt="wave"></img>
                        </div>
                        <p className='hello'>Hello I'm</p>
                    </div>
                    <p className='name'>Bhaskar Nandy1</p>

                    <div className='photo_and_bio_container'>
                        <div className='photo_and_bio'>
                            <div className='my_photo'>
                                <img src={myphoto} alt="my_photo" />
                            </div>

                            <p className='bio'>Associate Programmer (Apprentice) <span className='coding_format'>@ICRA Analytics</span> |
                                Co-Founder & Mentor <span className='coding_format'>@DSA Buster</span> | Specialist (1449)
                                <span className='coding_format'>@Codeforces</span> | Knight (1951) <span className='coding_format'>@Leetcode</span> |
                                Ex <span className='coding_format'>@Cognizant</span> | BCA'22 + MCA'24 <span className='coding_format'>@BWU</span></p>
                        </div>
                    </div>

                    <div className='load_more_btn'>
                        <button className='depth'><FontAwesomeIcon icon={control_icon} onClick={handle_control} /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;

