import React from "react";
import videoClip from "../../assets/images/videoclip.mp4";
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
          <div className={styles.home__img__card}>
            <p className={styles.home__img__cardText}>TOUR</p>
          </div>
        </div>
      </Link>
      <Link  to="/merch">
      <div className={styles.home__img2}>
          <div className={styles.home__img2__card}>
            <p className={styles.home__img2__cardText}>Merchandising</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
