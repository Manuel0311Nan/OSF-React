import React from "react";
import grupoCalle from "../../assets/images/grupoCalle.jpg";
import videoClip from "../../assets/images/videoclip.mp4"
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles.home}>
      <video className={styles.home__video}  controls src={videoClip}></video>
      <img
        className={styles.home__img}
        src={grupoCalle}
        alt="mainGrupo"
      ></img>

    </div>
  );
};

export default Home;
