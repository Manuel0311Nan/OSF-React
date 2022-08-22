import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthProvider } from '../../context/context'
// import { useAuthState } from '../../context/context'
import styles from "./Header.module.scss";
import title from "../../assets/images/logo.jpg";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () =>{
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link
            // className={styles.menu__div__nav__li__link}
            to="/home">
            <img src={title} alt="..." width="100px" height="100px"></img>
            </Link>
            <Link className={styles.menu__div__nav__li__link} to="/tour">
              Tour
            </Link>
            <Link className={styles.menu__div__nav__li__link} to="/songs">
            Songs
            </Link>
            <Link className={styles.menu__div__nav__li__link} to="/about">
            About
          </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export const Header = () => {
//   const { theme, toggleTheme } = useTheme();

//   const [userLogger, setUserLogger] = useState(false);
//   const { user } = useContext(AuthStateContext);

//   useEffect(() => {
//     if (user) {
//       setUserLogger(true);
//     } else {
//       setUserLogger(false);
//     }
//   }, [user]);

//   return (
//     <header
//       className={styles.menu}
//       style={{
//         backgroundColor: theme.background,
//       }}
//     >
//       <Link className={styles.menu__img} to="/home">
//         <img src={title} alt="logo" className={styles.menu__img}></img>
//       </Link>
//       <nav className={styles.menu__div}>
//         <input id={styles.menu__toggle} type="checkbox" />
//         <label className={styles.menu__div__btn} for="menu__toggle">
//           <span></span>
//         </label>
//       <ul className={styles.menu__div__nav}>
        // <li className={styles.menu__div__nav__li} >
        //   <Link
        //     className={styles.menu__div__nav__li__link}
        //     style={{
        //       backgroundColor: theme.background,
        //     }}
        //     to="/home"
        //   >
        //     Home
        //   </Link>
        // </li>
        // <li className={styles.menu__div__nav__li}>
        //   <Link className={styles.menu__div__nav__li__link} to="/tour">
        //     Tour
        //   </Link>
        // </li>
        // <li className={styles.menu__div__nav__li}>
        //   <Link className={styles.menu__div__nav__li__link} to="/songs">
        //     Songs
        //   </Link>
        // </li>
        // <li className={styles.menu__div__nav__li}>
        //   <Link className={styles.menu__div__nav__li__link} to="/about">
        //     About
        //   </Link>
        // </li>
//         <>
//           {userLogger ? (
//             <li className={styles.menu__div__nav__li}>
//               <Link className={styles.menu__div__nav__li__link} to="/dashboard">
//                 Mi perfil OSF
//               </Link>
//             </li>
//           ) : (
//             <li className={styles.menu__div__nav__li}>
//               <Link className={styles.menu__div__nav__li__link} to="/login">
//                 Acceder
//               </Link>
//             </li>
//           )}
//         </>
//       </ul>
// </nav>
//       <input
//         className={styles.bton}
//         type="image"
//         src={tema}
//         alt=""
//         onClick={toggleTheme}
//       />
//     </header>
//   );
// };
