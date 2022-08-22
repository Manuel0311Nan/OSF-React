import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthProvider } from '../../context/context'
// import { useAuthState } from '../../context/context'
// import styles from "./Header.module.scss";
// import title from "../../assets/images/logo.jpg";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

export const Header = () =>{
  return (
<nav className="navbar navbar-expand-lg navbar-light bgNavbar ">
      <div className="container-fluid d-flex flex-column">
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
        >
          <a
            className="navbar-brand d-flex justify-content-center"
            href="/home"
            alt=""
          >
            {" "}
            <img
              class="img-fluid w-25 align-content-center"
              src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476846/terminales/logo_gz68ak.png"
              alt="logo"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <Link
              to="/tour"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Tour
            </Link>
            <Link
              to="/songs"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Songs
            </Link>
            <Link
              to="/almacen"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Almacén
            </Link>
            <Link
              to="/flota"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Flota
            </Link>
            <Link
              to="/terminales"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Terminales
            </Link>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //       <Link
    //         // className={styles.menu__div__nav__li__link}
    //         to="/home">
    //         <img src={title} alt="..." width="100px" height="100px"></img>
    //         </Link>
    //         <Link className={styles.menu__div__nav__li__link} to="/tour">
    //           Tour
    //         </Link>
    //         <Link className={styles.menu__div__nav__li__link} to="/songs">
    //         Songs
    //         </Link>
    //         <Link className={styles.menu__div__nav__li__link} to="/about">
    //         About
    //       </Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
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
