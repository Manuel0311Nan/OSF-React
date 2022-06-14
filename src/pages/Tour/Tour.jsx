import React, { useState } from 'react';
import styles from "./Tour.module.scss"

import Show from './Show/Show';
const Tour = () => {
  const [tour, setTour] = useState([
    {
      when: "12/03/2017",
      where: "",
      who: ["Scars of oblivion", "Blaxem"],
      how: " 8 euros con consumición",
      poster: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232054/conciertos/concierto7_w4kaio.png"
    },
    {
      when: "18/03/2017",
      where: "",
      who: ["Law Maker", "Noxfilia"],
      how: "6 euros",
      poster: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232053/conciertos/concierto6_veln4o.png"
    },
    {
      when: "06/04/2019",
      where: "",
      who: ["La sonrisa metálica", "La revolución del mono"],
      how: " 8 euros con consumición",
      poster: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232054/conciertos/concierto5_oiwszo.png"
    },
    {
      when: "24/05/2019",
      where: "Sala Bazinga, Pinto",
      who: ["Fuck Division"],
      how: " 8 euros con consumición",
      poster: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232053/conciertos/concierto4_ftoyyu.png"
    },
    {
      when: "12/07/2019",
      where: "Sala Venom, Coslada",
      who: ["Sonitum Shelter"],
      how: " 6 euros con consumición",
      poster:"https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232054/conciertos/concierto3_gxif5s.png"
    },
    {
      when: "04/10/2019",
      where: "Sala Barracudas, Madrid",
      who: ["Son of sorrow", "Sun of the dying"],
      how: "10 euros",
      poster: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232053/conciertos/concierto2_hml65m.png"
    },
    {
      when: "07/11/2019",
      where: "Sala Barracudas, Madrid",
      who: ["Pitch Black", "Arde Mares"],
      how: "10 euros",
      poster: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1655232054/conciertos/concierto1_bnjt4z.png"
    },
  ]);
  return (
    <div className={styles.container}>{tour.map((show, index) => {
      return (
        <Show key={index} where={show.where} when={show.when} poster={show.poster} how={show.how} who={show.who}/>
      )
    })}
    </div>
  )
}

export default Tour