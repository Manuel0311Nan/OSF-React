import React from "react";
import { Link } from "react-router-dom";
// import { AuthProvider } from '../../context/context'
// import { useAuthState } from '../../context/context'
import "./Header.module.scss";
// import title from "../../assets/images/logo.jpg";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bgBlack row">
      <div className="d-flex flex-column  flex-lg-row pr-5 ">
        <a
          className="navbar-brand w-25 align-self-center d-flex justify-content-center"
          href="/home"
          alt=""
        >
          <img
            class="img-fluid w-25 align-content-center ms-3"
            src="https://res.cloudinary.com/manuelcodex/image/upload/v1661268748/conciertos/logoSinFondo_psrbgu.png"
            alt="logo"
          />
        </a>
        <div
          className="collapse navbar-collapse  fw-bold justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* <Link
              to="/tour"
              className=" h4 align-self-center nav-link  text-light"
            >
              Tour
            </Link> */}
            <Link
              to="/songs"
              className=" h4 align-self-center nav-link text-light"
            >
              Songs
            </Link>
            <Link
              to="/about"
              className=" h4 align-self-center nav-link text-light "
            >
              About Us
            </Link>
          </ul>
        </div>
        <button
          className="navbar-toggler w-25 align-self-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span class="material-symbols-outlined text-light ciclon">fingerprint</span>
          </span>
        </button>
      </div>
    </nav>
  );
};

// const { theme, toggleTheme } = useTheme();

// const [userLogger, setUserLogger] = useState(false);
// const { user } = useContext(AuthStateContext);

// useEffect(() => {
//   if (user) {
//     setUserLogger(true);
//   } else {
//     setUserLogger(false);
//   }
// }, [user]);
//   {userLogger ? (
//     <li className={styles.menu__div__nav__li}>
//       <Link className={styles.menu__div__nav__li__link} to="/dashboard">
//         Mi perfil OSF
//       </Link>
//     </li>
//   ) : (
//     <li className={styles.menu__div__nav__li}>
//       <Link className={styles.menu__div__nav__li__link} to="/login">
//         Acceder
//       </Link>
//     </li>
//   )}
// </>
// </ul>
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
