import React, { useEffect, useState } from 'react'
import SideBar from '../../Fixed/SideBar'
import leftarrow from "../../../assests/icons/leftarrow.svg"
import rightarrow from "../../../assests/icons/rightarrow.svg"
import searchicon from "../../../assests/icons/searchicon.svg"
import styles from "./index.module.css"
import punjabiSong from "../../../assests/images/punjabisong.jpg"
import axios from 'axios'



const SearchPage = () => {
  const [videos, setVideos] = useState([1, 2, 3, 4])

  const [singer, setSinger] = useState("")
  const singerHandler = (e) => {
    setSinger(e.target.value)
  }
    
  const handleClick = () => {
    alert("working")
    const clientId = "6c8ed59239dd4a5d99e2d73654c65f06"
    const redirectUrl = "http://localhost:3000/"
    const apiUrl = "https://accounts.spotify.com/authorize"
    const scope = ["user-read-email",
      'user-read-private', "user-read-playback-state",
      " user-modify-playback-state",
      "user-read-currently-playing", 
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}$redirect_url=${redirectUrl}$scope=${scope.join(" ")}&response_type=token&show_dialog=true`



  }

  // const songStar=()=>{
  //   console.log("working")
  //   axios({
  //    method:"GET",
  //    url:`https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`
  //   }).then((res)=>{
  //     console.log("response",res)
  // }).catch((err)=>{
  //     console.log("error",err)
  // })
  // }
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.searchContainer}>
        <div className={styles.searchField}>
          <div className={styles.navigation_icon}>
            <img src={leftarrow} alt="leftarrow" height={30} width={30} />
            <img src={rightarrow} alt="rightarrow" height={30} width={30} />
          </div>
          <div className={styles.inputField}>
            <img onClick={handleClick} src={searchicon} height={35} width={35} alt="search" />
            <input type="search" placeholder='What do you want to listen to ?' value={singer} onChange={singerHandler} />
          </div>
        </div>
        <div className={styles.focusSection}>
          <div className={styles.list}>
            <span>Browse all</span>
          </div>
          <div className={styles.row}>
            {videos.map((video) => {
              return (
                <div className={styles.chooseSong}>
                  <span>Punjabi</span>
                  <img src={punjabiSong} height="50%" width="50%" alt="punjabi song" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchPage

