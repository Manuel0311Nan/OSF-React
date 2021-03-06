import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthProvider } from '../../context/context'
import { AuthStateContext } from "../../context/context";
// import { useAuthState } from '../../context/context'
import { useTheme } from "../../context/Themcontext";
import styles from "./Header.module.scss";
import title from "../../assets/images/logo.jpg";
import tema from "../../assets/images/actualizar.png";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [userLogger, setUserLogger] = useState(false);
  const { user } = useContext(AuthStateContext);

  useEffect(() => {
    if (user) {
      setUserLogger(true);
    } else {
      setUserLogger(false);
    }
  }, [user]);
  return (
    <nav
      className={styles.menu}
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Link className={styles.menu__nav__li__img} to="/home">
        <img src={title} alt="logo" className={styles.menu__img}></img>
      </Link>
      <ul className={styles.menu__div__nav}>
        <li className={styles.menu__div__nav__li}>
          <Link
            className={styles.menu__div__nav__li__link}
            style={{
              backgroundColor: theme.background,
            }}
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className={styles.menu__div__nav__li}>
          <Link className={styles.menu__div__nav__li__link} to="/tour">
            Tour
          </Link>
        </li>
        <li className={styles.menu__div__nav__li}>
          <Link className={styles.menu__div__nav__li__link} to="/songs">
            Songs
          </Link>
        </li>
        <li className={styles.menu__div__nav__li}>
          <Link className={styles.menu__div__nav__li__link} to="/about">
            About
          </Link>
        </li>
        <>
          {userLogger ? (
            <li className={styles.menu__div__nav__li}>
              <Link className={styles.menu__div__nav__li__link} to="/dashboard">
                Mi perfil OSF
              </Link>
            </li>
          ) : (
            <li className={styles.menu__div__nav__li}>
              <Link className={styles.menu__div__nav__li__link} to="/login">
                Acceder
              </Link>
            </li>
          )}
        </>
      </ul>

      <input
        className={styles.bton}
        type="image"
        src={tema}
        alt=""
        onClick={toggleTheme}
      />
    </nav>
  );
};
