import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import title from '../../assets/images/title.PNG'
export const Header = () => {
  return (
      <div className={styles.menu}>
      <img src={title} alt="logo" className= {styles.menu__img}>
          </img>
      <div className={styles.menu__div}>
              <ul className={styles.menu__nav}>
                  <li className={styles.menu__nav__li}>
                      <Link className={styles.menu__nav__li__link} to="/home">
                          Home
                    </Link>
                  </li>
                  <li className={styles.menu__nav__li}>
                      <Link className={styles.menu__nav__li__link}to="/tour">
                          Tour
                    </Link>
                  </li>
                  <li className={styles.menu__nav__li}>
                      <Link className={styles.menu__nav__li__link} to="/merch">
                          Merch
                    </Link>
                  </li>
           {/* {authenticated ? (
            <li className='nav-item'>
              <Link className='flex-sm-fill text-sm-center nav-link' to="/cesta">
                Mi perfil
              </Link>
            </li> */}
            <li className={styles.menu__nav__li}>
              <Link className={styles.menu__nav__li__link} to="/login">
                Acceder
              </Link>
            </li>
          </ul>
          </div>
      </div>
  )
}
