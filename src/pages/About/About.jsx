import React, { useState, useEffect } from "react";
// import { useTheme } from '../../context/Themcontext';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { BASE_URL } from "../../assets/apiRoutes";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./About.module.scss"
// import { Link } from 'react-router-dom';
const About = () => {

  let [abot, setAbot] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/about/`)
      .then((response) => response.json())
      .then((data) => setAbot(data));
  }, []);

  return (
    <section className="lp">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
                clickable: true,
                type: 'bullets',
        }}
      
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper container"
    >
      {abot.map((about, key) => (
        <SwiperSlide key={about._id} className="">
          <img src={about.image} alt={about.name}  className="col-12 "/>
        </SwiperSlide>

      ))}
        </Swiper>
        <section className="aboutBG">
           <div className="">
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
           {abot.map((about, key) => (
            <section key={about._id} className="col">
              <div className="card m-2 bg-transparent ">
                <img
                  className="card-img-top p-2 aboutHover"
                  src={about.image}
                  alt={about.name}
                ></img>
                <div className="card-body">
                          <h3 className="text-center text-light">{about.name}</h3>
                          <h3 className="text-center text-light">{about.instrument}</h3>
                          <h6 className="text-center text-light">{about.date}</h6>
                </div>
              </div>
            </section>
          ))}
        </div>
            </div>
            </section>
            </section>
    );
  }
export default About;
