import React from 'react'
import { Link } from 'react-router-dom'
import styles from'./Header.module.scss'
export const Header = () => {
  return (
      <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <img src="../../assets/images/logo.jpg" alt="logo" className= {styles.img}>
          </img>
          <div className= 'container-fluid ' >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item '>
                      <Link className='flex-sm-fill text-sm-center nav-link' to="/home">
                          Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='flex-sm-fill text-sm-center nav-link ' to="/tour">
                          Tour
                    </Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='flex-sm-fill text-sm-center nav-link' to="/merch">
                          Merch
                    </Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='flex-sm-fill text-sm-center nav-link' to="/login">
                          Acceder
                    </Link>
                  </li>
            </ul>
          </div>
      </div>
  )
}
