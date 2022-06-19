import React from 'react'
import styles from "./Songs.module.scss"
import cancion2 from "../../assets/music/cancion2.mp3";
const Songs = () => {
  return (
    <div className={styles.shop}>New Disc
        <div>
        <h1>Title 1</h1>
        <audio src={cancion2} controls></audio>
      </div>
      </div>
  )
}

export default Songs