import React, { useState } from 'react'
import styles from "./index.module.css"

import leftarrow from "../../../assests/icons/leftarrow.svg"
import rightarrow from "../../../assests/icons/rightarrow.svg"
import song from "../../../assests/images/song.jpg"
import spotify from "../../../assests/images/spotify.jpg"
// import { useNavigate } from 'react-router-dom'
import SideBar from '../../Fixed/SideBar'
import { Navigate, useNavigate } from 'react-router-dom'
// import axios from 'axios'



function HomePage() {
    const [videos, setVideos] = useState([1, 2, 3, 4]);
    const [spotifysong, setSpotifySong] = useState([1, 2, 3, 4]);
     
    const navigate=useNavigate()
    const signuppage=()=>{
        navigate("/signup")
    }
    const loginpage=()=>{
        navigate("/spotifylogin")
    }

    // const clientId="6c8ed59239dd4a5d99e2d73654c65f06"
    // const clientSecreat="63559caef09f420889815e45e9021e7b"

    // const spotifyApi=()=>{
    // alert("working")
    //  axios({
    //     method:"GET",
    //     url:"https://api.spotify.com/v1/albums/id/tracks"
    //  })
    //  .then((res)=>{
    //     console.log("response",res)
    //  })
    //  .catch((err)=>{
    //     console.log("error",err)
    //  })
    // }

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
                                        <img className={styles.image} src={song} alt="focussong" />
                                        <span>Peaceful Piano</span>
                                        <p>Relax and indulge with beautiful piano pieces</p>
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
                                        <img className={styles.image} src={spotify} alt={song} />
                                        <span>Peaceful Piano</span>
                                        <p>Relax and indulge with beautiful piano pieces</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
