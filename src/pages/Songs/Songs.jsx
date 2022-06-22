import React from "react";
import styles from "./Songs.module.scss";
import cancion1 from "../../assets/music/cancion1.mp3";
import cancion2 from "../../assets/music/cancion2.mp3";
import cancion3 from "../../assets/music/cancion3.mp3";
import cancion4 from "../../assets/music/cancion4.mp3";
import cancion5 from "../../assets/music/cancion5.mp3";
import portada from "../../assets/images/portadaDisco.jpeg";
import { useTheme } from "../../context/Themcontext";
const Songs = () => {
  const { theme } = useTheme();
  return (
    <section className={styles.lp} style={{
      backgroundColor: theme.background2,
    }}>
      <img className={styles.lp__portada} src={portada} alt="..."></img>
      <div className={styles.disc}>
        <h1 className={styles.title}>Disfruta del último EP "Awakening"</h1>
              <div className={styles.disc__song}>
        <h1 className={styles.disc__song__title}>prey</h1>
        <audio src={cancion5} controls></audio>
        </div>
        <div className={styles.disc__song}>
        <h1 className={styles.disc__song__title}>Disconnected</h1>
        <audio src={cancion3} controls></audio>
        </div>
              <div className={styles.disc__song}>
        <h1 className={styles.disc__song__title}>Ascension</h1>
        <audio src={cancion2} controls></audio>
        </div>
        <div className={styles.disc__song}>
        <h1 className={styles.disc__song__title}>strain</h1>
        <audio src={cancion4} controls></audio>
      </div>
      <div className={styles.disc__song}>
        <h1 className={styles.disc__song__title}>redemption</h1>
        <audio src={cancion1} controls></audio>
      </div>
      </div>
    </section>
  );
};

export default Songs;
