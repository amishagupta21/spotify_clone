import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../../Fixed/SideBar'
import styles from "./index.module.css"
import leftarrow from "../../../assests/icons/leftarrow.svg"
import rightarrow from "../../../assests/icons/rightarrow.svg"
import accounticon from "../../../assests/icons/accounticon.svg"
import downarrow from "../../../assests/icons/downarrow.svg"
import stopbutton from "../../../assests/images/stopbutton.jpg"
import fav1 from "../../../assests/images/fav1.jpg"

const CreatePlayList = () => {

    const [stop, setStopbtn] = useState(false)
    const hoverPlayBtnRef = useRef(null)

    useEffect(() => {
        const enter = () => setStopbtn(true);
        const leave = () => setStopbtn(false);
        hoverPlayBtnRef?.current?.addEventListener("mouseenter", enter)
        hoverPlayBtnRef?.current?.addEventListener("mouseout", leave)
        return () => {
            hoverPlayBtnRef?.current?.removeEventListener('mouseenter', enter);
            hoverPlayBtnRef?.current?.removeEventListener("mouseout", leave);
        }
    }, []);
    
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.playlistContainer}>
                <div className={styles.searchContainer}>
                    <div className={styles.navigation_icon}>
                        <img src={leftarrow} alt="leftarrow" height={30} width={30} />
                        <img src={rightarrow} alt="rightarrow" height={30} width={30} />
                    </div>
                    <div className={styles.options}>
                        <span>Playlists</span>
                        <span>Podcasts</span>
                        <span>Artists</span>
                        <span>Albums</span>
                    </div>

                    <div className={styles.accountField}>
                        <img src={accounticon} height={22} width={22} alt="accounticon"/>
                        <span>amishagupta</span>
                        <img src={downarrow} height={16} width={16} alt="downarrow"/>
                    </div>
                </div>

                <div className={styles.savedPlaylist}>

                    <div className={styles.lists}>
                        <span>
                            Playlists
                        </span>
                    </div>

                    <div className={styles.songList}>
                        <div ref={hoverPlayBtnRef} className={styles.likedSongList}>
                            <span>Liked Songs</span>
                            <span>0 Liked Songs</span>
                            {stop&&<div className={styles.stopbtn}>
                                <img src={stopbutton} height={50} width={50} alt='stopbtn' />
                            </div>}
                        </div>

                        <div className={styles.favourites}>
                           <img src={fav1} height="70%" width="70%" alt="sad-song"/>
                           <span>sad songs</span>
                           <span>By AmishaGupta</span>
                        </div>

                        <div className={styles.favourites}>
                           <img src={fav1} height="70%" width="70%" alt="favourite icon"/>
                           <span>sad songs</span>
                           <span>By AmishaGupta</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CreatePlayList
