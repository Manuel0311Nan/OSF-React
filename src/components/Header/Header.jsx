import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import title from '../../assets/images/title.PNG'
// import { AuthProvider } from '../../context/context'
import { AuthStateContext } from '../../context/context'
// import { useAuthState } from '../../context/context'

export const Header = () => {

  const [userLogger, setUserLogger] = useState(false);
  const { user } = useContext(AuthStateContext)
  
  useEffect(() => {
    if (user) {
      setUserLogger(true)
    }
  }, [user])
  console.log(user);
  return (

      <div className={styles.menu}>
      <Link className={styles.menu__nav__li__link} to="/home">
      <img src={title} alt="logo" className= {styles.menu__img}>
      </img>
      </Link>
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
                  <>
            {userLogger ?
              <li className={styles.menu__nav__li}>
              <Link className={styles.menu__nav__li__link} to="/dashboard">
                Mi perfil OSF
              </Link>
            </li> :
              <li className={styles.menu__nav__li}>
              <Link className={styles.menu__nav__li__link} to="/login">
                Acceder
              </Link>
            </li>
            }</>
          </ul>
          </div>
      </div >
  )
}
