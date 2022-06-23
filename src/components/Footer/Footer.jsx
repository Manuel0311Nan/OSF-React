import React from "react";
// import { Link } from 'react-router-dom'
import styles from "./Footer.module.scss";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram(3).png";
import youtube from "../../assets/images/youtube.png";
import { useTheme } from "../../context/Themcontext";
export const Footer = () => {
  const { theme} = useTheme();
  return (
      <div  style={{
        backgroundColor: theme.background,
      }}  className={styles.socialMedia}>
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
  );
};
