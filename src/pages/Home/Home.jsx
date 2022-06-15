import React from "react";
import grupoCalle from "../../assets/images/grupoCalle.jpg";
import videoClip from "../../assets/images/videoclip.mp4";
import camiMerch from "../../assets/images/merch.PNG";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <video className={styles.home__video} controls src={videoClip}></video>
      <Link  to="/tour">
        {/* <img
          className={styles.home__img}
          src={grupoCalle}
          alt="mainGrupo"
        ></img> */}
        <div className={styles.home__img}>
          <div className={styles.home__img__text}></div>
        </div>
      </Link>
      <Link  to="/merch">
        <img
          className={styles.home__img2}
          src={camiMerch}
          alt="mainGrupo"
        ></img>
      </Link>
    </div>
  );
};

export default Home;
