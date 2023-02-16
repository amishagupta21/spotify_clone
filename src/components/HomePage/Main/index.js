import React, { useEffect, useState } from 'react'
import styles from "./index.module.css"

import leftarrow from "../../../assests/icons/leftarrow.svg"
import rightarrow from "../../../assests/icons/rightarrow.svg"
import SideBar from '../../Fixed/SideBar'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'



function HomePage() {
    const [videos, setVideos] = useState([]);
    const [spotifysong, setSpotifySong] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: 'arijit singh' },
            headers: {
                'X-RapidAPI-Key': '85f21379f3mshf7d7a5cd7f475f2p18f180jsn43b4792c0f30',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setVideos(response.data.data);

        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: 'neha kakkar' },
            headers: {
                'X-RapidAPI-Key': '85f21379f3mshf7d7a5cd7f475f2p18f180jsn43b4792c0f30',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setSpotifySong(response.data.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    const navigate = useNavigate()
    const signuppage = () => {
        navigate("/signup")
    }
    const loginpage = () => {
        navigate("/spotifylogin")
    }


    return (
        <div className={styles.container}>
            <SideBar />

            <div className={styles.homeBar}>
                <div className={styles.search}>
                    <div className={styles.navigation_icon}>
                        <img src={leftarrow} alt="leftarrow" height={30} width={30} />
                        <img src={rightarrow} alt="rightarrow" height={30} width={30} />
                    </div>
                    <nav className={styles.menuoption}>
                        <ul>
                            <li>Premium</li>
                            <li>Support</li>
                            <li>Download</li>
                        </ul>
                        <div className={styles.cta}>
                            <button onClick={signuppage} className={styles.signup}>Sign Up</button>
                            <button onClick={loginpage} className={styles.login}>Log In</button>
                        </div>
                    </nav>

                </div>
                <div className={styles.songs}>
                    <div className={styles.focusSection}>
                        <div className={styles.lists}>
                            <span>Focus</span>
                            <span>Show All</span>
                        </div>
                        <div className={styles.row}>
                            {videos.map((video, index) => {
                                return (
                                    <div key={index} className={styles.focussongs}>
                                        <img className={styles.image} src={video?.artist?.picture} alt="focussong" />
                                        <span>{video?.artist?.link}</span>
                                        <p>{video?.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.playListSeaction}>
                        <div className={styles.lists}>
                            <span>Spotify-PlayList</span>
                            <span>Show All</span>
                        </div>

                        <div className={styles.row}>
                            {spotifysong.map((song, index) => {
                                return (
                                    <div key={index} className={styles.focussongs}>
                                        <img className={styles.image} src={song?.artist?.picture} alt="songs" />
                                        <span>{song?.artist?.link}</span>
                                        <p>{song?.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.plyaContainer}>
                {/* <audio controls>
                    <source src="https://cdns-preview-6.dzcdn.net/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3" type="audio/mp3">
                        Your browser does not support the audio element.
                </audio> */}
            </div>
        </div>
    )
}

export default HomePage;
