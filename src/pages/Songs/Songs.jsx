import React from "react";
import "./Songs.module.scss";
import cancion1 from "../../assets/music/cancion1.mp3";
import cancion2 from "../../assets/music/cancion2.mp3";
import cancion3 from "../../assets/music/cancion3.mp3";
import cancion4 from "../../assets/music/cancion4.mp3";
import cancion5 from "../../assets/music/cancion5.mp3";
import portada from "../../assets/images/portadaDisco.jpeg";
// import { useTheme } from "../../context/Themcontext";
const Songs = () => {
  // const { theme } = useTheme();
  return (
    <section className="lp">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-stretch">
      <img className="col-8 my-5 ronded" src={portada} alt="..."></img>
      <div className="col-6 d-flex flex-column align-items-center mt-2">
        <h1 className="text-light text-center">Disfruta del último EP "Awakening"</h1>
        <div className="">
          <h1 className="text-light">prey</h1>
          <audio src={cancion5} controls></audio>
        </div>
        <div className="">
          <h1 className="text-light">Disconnected</h1>
          <audio src={cancion3} controls></audio>
        </div>
        <div className="">
        <h1 className="text-light">Ascension</h1>
        <audio src={cancion2} controls></audio>
</div>
      <div className="">
        <h1 className="text-light">strain</h1>
        <audio src={cancion4} controls></audio>
      </div>
      <div className="">
        <h1 className="text-light">redemption</h1>
        <audio src={cancion1} controls></audio>
        </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Songs;
