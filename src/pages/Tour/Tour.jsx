import React from "react";
import styles from "./Tour.module.scss";
import Show from "./Show/Show";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../context/Themcontext";
// import VideoTour from '../../core/videoBackground/videoTour';
const Tour = () => {
  const { theme } = useTheme();
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
  return (
    
      <div className={styles.container}  style={{
        backgroundColor: theme.background2,
      }}>
        {tour.map((show) => {
          return (
            <Fade slide>
              <Show
              where={show.where}
              when={show.when}
              poster={show.poster}
              how={show.how}
              who={show.who}
            />
            </Fade>
          );
        })}
      </div>

  );
};

export default Tour;
