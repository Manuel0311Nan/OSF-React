import React from "react";
import videoClip from "../../assets/images/videoclip.mp4";
import { Link } from "react-router-dom";
// import { useTheme } from "../../context/Themcontext";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="d-flex flex-column">
          <h1 className="text-center text-light text-uppercase textHover mt-3">One second... play!!</h1>
          <video
            className="my-3 video"
            controls
            src={videoClip}
          ></video>
          <Link className="nav-link" to="/tour">
            <div className="row m-4 link-light text-decoration-none">
              <img className="col-8 imgTrn" src="https://res.cloudinary.com/manuelcodex/image/upload/v1661875977/conciertos/grupoCalle_zeru7a.jpg" alt="..."></img>
              <h1 className="col-4 text-center align-self-center textHover">Tour</h1>
            </div>
          </Link>
          <Link className="nav-link" to="/songs">
            <div className="row m-4 link-light text-decoration-none">
            <h1 className="col-4 text-center align-self-center  textHover">New EP</h1>
              <img className="col-8 imgTrn" src="https://res.cloudinary.com/manuelcodex/image/upload/v1662046632/conciertos/portadaDisco_wy52j0.jpg" alt="..."></img>
            </div>
          </Link>
          <Link className="nav-link" to="/about">
            <div className="row m-4 link-light text-decoration-none">
              <img className="col-8 imgTrn" src="https://res.cloudinary.com/manuelcodex/image/upload/v1661875979/conciertos/GrupoCalleColor_rerpdo.jpg" alt="..."></img>
              <h1 className="col-4 text-center align-self-center textHover">About Us</h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
