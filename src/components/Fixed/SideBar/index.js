import React from 'react'
import styles from "./index.module.css"
import spotify_logo from "../../../assests/icons/light_logo.svg"
import searchicon from "../../../assests/icons/searchicon.svg"
import home from "../../../assests/icons/home.svg"
import library from "../../../assests/icons/library.svg"
import createPlaylist from "../../../assests/icons/createPlaylist.svg"
import likedsong from "../../../assests/icons/likedsong.svg"
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className={styles.SideBar}>
            <div className={styles.logo}>
                <img src={spotify_logo} width={"150px"} alt="logo" />
            </div>
            <div className={styles.options}>
                <div className={styles.option}>
                    <Link to="/" className={styles.icon}>
                        <img src={home} alt="home icon" height={30} width={30} />
                        <h2>Home</h2>
                    </Link>

                    <Link to="/searchpage" className={styles.icon}>
                        <img src={searchicon} alt="home icon" height={30} width={30} />
                        <h2>Search</h2>
                    </Link>

                    <Link to="/playlists" className={styles.icon}>
                        <img src={library} alt="home icon" height={30} width={30} />
                        <h2>Your Library</h2>
                    </Link>
                </div>
                <div className={styles.playlist}>
                    <div className={styles.icon}>
                        <img src={createPlaylist} alt="home icon" height={30} width={30} />
                        <h2>Create Playlist</h2>
                    </div>
                    <div className={styles.icon}>
                        <img src={likedsong} alt="home icon" height={30} width={30} />
                        <h2>Liked Songs</h2>
                    </div>
                    <hr className={styles.line} />
                </div>
            </div>
            <div className={styles.sidebarfooter}>
                <a href="#cookies">Cookies</a>
                <a href="#privacy">Privacy</a>
            </div>
        </div>
    )
}

export default SideBar
