import React, {useState} from "react";
//import styles from "./Tour.module.scss";
//import Show from "./Show/Show";
//import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../context/Themcontext";
// import VideoTour from '../../core/videoBackground/videoTour';
const Tour = () => {
  const { theme } = useTheme();
  const currentDate = new Date();
  const tour = [
    {
      id:"1",
      when: "18/03/2017",
      where: "ACAAA, Ávila",
      who: ["Law Maker", " & ", "Noxfilia"],
      how: "6 euros",
      poster:
        "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232053/conciertos/concierto6_veln4o.png",
    },
    {
      id:"2",
      when: "06/04/2019",
      where: "Sala Inferno's, Móstoles",
      who: ["La sonrisa metálica", " & ", "La revolución del mono"],
      how: " 8 euros con consumición",
      poster:
        "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232054/conciertos/concierto5_oiwszo.png",
    },
    {
      id:"3",
      when: "24/05/2019",
      where: "Sala Bazinga, Pinto",
      who: ["Fuck Division"],
      how: " 8 euros con consumición",
      poster:
        "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232053/conciertos/concierto4_ftoyyu.png",
    },
    {
      id:"4",
      when: "12/07/2019",
      where: "Sala Venom, Coslada",
      who: ["Sonitum Shelter"],
      how: " 6 euros con consumición",
      poster:
        "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232054/conciertos/concierto3_gxif5s.png",
    },
    {
      id: "5",
      when: "04/10/2019",
      where: "Sala Barracudas, Madrid",
      who: ["Son of sorrow", " & ", "Sun of the dying"],
      how: "10 euros",
      poster:
        "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232053/conciertos/concierto2_hml65m.png",
    },
  ];
  const convertDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  const [showUpcoming, setShowUpcoming] = useState(false);

  const pastShows = tour.filter(show => convertDate(show.when) < currentDate);

  const upcomingShows = tour.filter(show => convertDate(show.when) >= currentDate);

  const renderShows = (shows) => {
    if (shows.length === 0) {
      return (
        <section className="col">
          <div className="card m-2 bg-transparent ">
            <div className="card-body">
              <h3 className="text-center text-dark">Próximamente</h3>
              <h5 className="text-center text-danger">No tenemos conciertos programados en este momento.</h5>
            </div>
          </div>
        </section>
      );
    }
  
    return shows.map((show, key) => (
      <section key={show.id} className="col">
        <div className="card m-2 bg-transparent ">
          <div className="card-body">
            <h3 className="text-center text-dark">{show.who}</h3>
            <h5 className="text-center text-danger">{show.where}</h5>
            <h5 className="text-center text-danger">{show.when}</h5>
          </div>
        </div>
      </section>
    ));
  };

  return (
   <div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-danger mr-2 " onClick={() => setShowUpcoming(false)}>Eventos Pasados</button>
        <button className="btn btn-dark" onClick={() => setShowUpcoming(true)}>Eventos Futuros</button>
      </div>

      <div className="d-flex flex-column">
        {showUpcoming ? <h className="text-center">Conciertos Futuros</h> : <h className="text-center">Conciertos Pasados</h>}
        {showUpcoming ? renderShows(upcomingShows) : renderShows(pastShows)}

      </div>
    </div>

  );
};

export default Tour;
