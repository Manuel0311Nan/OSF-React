import React from "react";
// import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
export const Footer = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className={styles.socialMedia}>
            <a
              href="https://www.facebook.com/search/top?q=one%20second%20faith"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.socialMedia__link} src="../../assets/images/facebook.png" alt="facebook"></img>
            </a>
            <a
              href="https://www.instagram.com/onesecondfaith/"
              target="_blank"
              rel="noreferrer"
            >
            <img className={styles.socialMedia__link} src="../../assets/images/instagram(3).png" alt="facebook"></img>
            </a>
            <a
              href="https://www.youtube.com/user/onesecondfaith"
              target="_blank"
              rel="noreferrer"
            >
            <img className={styles.socialMedia__link} src="../../assets/images/youtube.png" alt="facebook"></img>
            </a>


      </div>
    </div>
  );
};
