import React, { useEffect, useState } from 'react'
import SideBar from '../../Fixed/SideBar'
import leftarrow from "../../../assests/icons/leftarrow.svg"
import rightarrow from "../../../assests/icons/rightarrow.svg"
import searchicon from "../../../assests/icons/searchicon.svg"
import styles from "./index.module.css"
import punjabiSong from "../../../assests/images/punjabisong.jpg"
import axios from 'axios'



const SearchPage = () => {
  const [videos, setVideos] = useState([])

  const [singer, setSinger] = useState("")
  const singerHandler = (e) => {
    setSinger(e.target.value)
  }
    
  const handleClick = () => {
    // alert("working")
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: singer},
      headers: {
        'X-RapidAPI-Key': '85f21379f3mshf7d7a5cd7f475f2p18f180jsn43b4792c0f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.data);
      setVideos(response.data.data)
      // console.log(setVideos)
    }).catch(function (error) {
      console.error(error);
    });
  }
 

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
            {videos.map((video,index) => {
              return (
                <div key={index} className={styles.chooseSong}>
                  <span>{video.artist.name}</span>
                  <img src={video.artist.picture} height="50%" width="50%" alt="punjabi song"/>
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

