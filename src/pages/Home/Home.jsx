import React from "react";
import videoClip from "../../assets/images/videoclip.mp4";
import { Link } from "react-router-dom";
// import { useTheme } from "../../context/Themcontext";
const Home = () => {
  return (
    
    <section className="home">
      <div className="container">
      <div class="star-wars-intro">


<p class="intro-text">
  A few days ago, during...
</p>


<h2 class="main-logo">
</h2>


<div class="main-content">

  <div class="title-content">
    <p class="content-header">One Second Faith History<br/></p>

    <p class="content-body">
    Tras muchos ańos de largo recorrido por separado, José Miguel Flores, Raúl Sáez y Alejandro Jiménez deciden comenzar en Diciembre de 2011 un nuevo proyecto en el que prime la música, la composición y la fuerza.Tras la entrada de Ramón Nissen a principios de 2012 la formación adoptó el estilo y el sonido definitivos. Influenciados por el Death Metal y el Groove Metal, rápidamente, la banda perfila los temas y compone lo que son los cimientos de un sonido propio y característico.En Noviembre de 2012 Gabriel se una a la formación aportando su voz y la rabia que hacían falta para redondear las composiciones.En 2013, después de la marcha de Ramón y Gabriel, la bando siguió trabajando dando un lavado de cara a los temas y escribiendo nuevos a la vez que seguía buscando nuevos miembros. A finales de 2013 se incorpora Willy Romero a la batería y en la primavera de 2014 Luisma Rott Vazquez cierra la formación. Tras finalizar la grabación de su primer EP Willy Romero abandona la banda por motivos personales y Javier Bueno entra en su lugar.

A comienzos del Septiembre de 2018 la banda sufre otro cambio de formación, incorpora al bajo a Karl y a Paris Lakryma a la batería.

Ahora la banda esta trabajando en el lanzamiento de su próximo EP "Awakening" que será lanzado en el verano de 2022.      </p>
    {/* <a href="./StarScroll.zip" class="space-button">Download The Code Now!</a> */}
      
  </div>
</div>
</div>
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
