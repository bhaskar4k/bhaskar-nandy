import { React, useState, useEffect } from 'react';
import {
    leetcode_easy_src, leetcode_medium_src, leetcode_hard_src,
    leetcode_total_solved_src, leetcode_rating_src, leetcode_rank_src,
    codeforces_rating_src, codeforces_rank_src
} from '../Details/Details';

function CodingAchievement() {
    let leetcode_data_in_cache = JSON.parse(localStorage.getItem("leetcode_data_in_cache"));

    const [leetcode_easy, set_leetcode_easy] = useState(leetcode_easy_src);
    const [leetcode_medium, set_leetcode_medium] = useState(leetcode_medium_src);
    const [leetcode_hard, set_leetcode_hard] = useState(leetcode_hard_src);
    const [leetcode_total_solved, set_leetcode_total_solved] = useState(leetcode_total_solved_src);
    const [leetcode_rating, set_leetcode_rating] = useState(leetcode_rating_src);
    const [leetcode_rank, set_leetcode_rank] = useState(leetcode_rank_src);

    const [codeforces_rating, set_codeforces_rating] = useState(codeforces_rating_src);
    const [codeforces_rank, set_codeforces_rank] = useState(codeforces_rank_src);

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const current_datetime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    useEffect(() => {
        async function fetch_leetcode_data_from_api() {
            let leetcode_data_in_cache = {
                leetcode_easy: leetcode_easy_src,
                leetcode_medium: leetcode_medium_src,
                leetcode_hard: leetcode_hard_src,
                leetcode_total_solved: leetcode_total_solved_src,
                leetcode_highest_rating: leetcode_rating_src,
                leetcode_highest_rank: leetcode_rank_src,
                last_api_call_datetime: current_datetime
            }

            try {
                let url = "https://alfa-leetcode-api.onrender.com/bhaskar_op/solved";
                let response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Origin': '*',
                    },
                });

                let leetcode_data = await response.json();

                set_leetcode_easy(leetcode_data.easySolved)
                set_leetcode_medium(leetcode_data.mediumSolved)
                set_leetcode_hard(leetcode_data.hardSolved)
                set_leetcode_total_solved(leetcode_data.solvedProblem)

                leetcode_data_in_cache.leetcode_easy = leetcode_data.easySolved;
                leetcode_data_in_cache.leetcode_medium = leetcode_data.mediumSolved;
                leetcode_data_in_cache.leetcode_hard = leetcode_data.hardSolved;
                leetcode_data_in_cache.leetcode_total_solved = leetcode_data.solvedProblem;

                url = "https://alfa-leetcode-api.onrender.com/bhaskar_op/contest";
                response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Origin': '*',
                    },
                });

                leetcode_data = await response.json();

                let contest_rating = 0;
                let contest_arr = leetcode_data.contestParticipation;
                for (let i = 0; i < contest_arr.length; i++) {
                    if (contest_arr[i].rating > contest_rating) {
                        contest_rating = contest_arr[i].rating;
                    }
                }

                set_leetcode_rating(contest_rating);
                set_leetcode_rank(leetcode_data.contestBadges.name);

                leetcode_data_in_cache.leetcode_highest_rating = contest_rating;
                leetcode_data_in_cache.leetcode_highest_rank = leetcode_data.contestBadges.name;

                localStorage.setItem("leetcode_data_in_cache", JSON.stringify(leetcode_data_in_cache));
            } catch (error) {
                console.error(error);
            }
        }

        function fetch_leetcode_data_from_cache() {
            set_leetcode_easy(leetcode_data_in_cache.leetcode_easy);
            set_leetcode_medium(leetcode_data_in_cache.leetcode_medium);
            set_leetcode_hard(leetcode_data_in_cache.leetcode_hard);
            set_leetcode_total_solved(leetcode_data_in_cache.leetcode_total_solved);
            set_leetcode_rating(leetcode_data_in_cache.leetcode_highest_rating);
            set_leetcode_rank(leetcode_data_in_cache.leetcode_highest_rank);
        }


        if (leetcode_data_in_cache === null || current_datetime - leetcode_data_in_cache.last_api_call_datetime > 7200) {
            fetch_leetcode_data_from_api();
        } else {
            fetch_leetcode_data_from_cache();
        }
    }, [])


    return (
        <>
            <div className='body_parent'>
                <div className='coding_achievements'>
                    <div className='leetcode_detail'>
                        <p className='lc_title'>Leetcode Data</p>
                        <p className='lc_rating'>Highest Rating: {leetcode_rank} ({Math.ceil(leetcode_rating)})</p>
                        <p className='lc_easy'>Easy : <span>{leetcode_easy}</span></p>
                        <span className='slight_gap'></span>
                        <p className='lc_medium'>Medium : <span>{leetcode_medium}</span></p>
                        <span className='slight_gap'></span>
                        <p className='lc_hard'>Hard : <span>{leetcode_hard}</span></p>
                        <span className='slight_gap'></span>
                        <p className='lc_total'>Total solved : <span>{leetcode_total_solved}</span></p>
                    </div>

                    <div className='codeforces_detail'>
                        <p className='cf_title'>Codeforces Data</p>
                        <p className='cf_rating'>Highest Rating: <span className='cf_color'>{codeforces_rank} ({Math.ceil(codeforces_rating)})</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CodingAchievement;

