import React from "react";
// import { Link } from 'react-router-dom'
import styles from "./Footer.module.scss";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram(3).png";
import youtube from "../../assets/images/youtube.png";
import spotify from "../../assets/images/spotify.png"
import viking from "../../assets/images/vikingo.png"
import { useTheme } from "../../context/Themcontext";
export const Footer = () => {
  const { theme } = useTheme();
  return (
    < >
      <div
        style={{
          backgroundColor: theme.background,
        }}
        className="d-flex flex-column justify-content-center"
      >
      <div className="d-flex justify-content-center">
        <a
          href="https://open.spotify.com/artist/6tFCiZQRje5CSFkkt4sQ7D"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.socialMedia__link}
            src={spotify}
            alt="spotify"
          ></img>
        </a>
        <a
          href="https://www.facebook.com/onesecondfaith"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.socialMedia__link}
            src={facebook}
            alt="facebook"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/onesecondfaith/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.socialMedia__link}
            src={instagram}
            alt="instagram"
          ></img>
        </a>
        <a
          href="https://www.youtube.com/user/onesecondfaith"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.socialMedia__link}
            src={youtube}
            alt="youtube"
          ></img>
          </a>
        </div>
        <div className="fw-bold text-center text-white"> By littleOdin <img width={20} src={viking} alt="littleOdin"></img> </div>
      </div>
    </>
  );
};
