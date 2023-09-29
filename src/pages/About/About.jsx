import React, { useState, useEffect } from "react";
// import { useTheme } from '../../context/Themcontext';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { BASE_URL } from "../../assets/apiRoutes";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./About.module.scss"
import { ScrollButton } from "../../components/ScrollButton/ScrollButton";
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
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
                clickable: true,
                type: 'bullets',
                
        }}
      
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper container"
    >
      {abot.map((about, key) => (
        <SwiperSlide key={about._id} className="">
          <img src={about.image} alt={about.name}  className="col-11  d-none d-lg-block"/>
        </SwiperSlide>

      ))} 
        </Swiper>
        <section className="aboutBG">
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 vh-100 align-content-center ">
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
                          <h3 className="text-center text-danger">{about.instrument}</h3>
                          {/* <h6 className="text-center text-light">{about.date}</h6> */}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
      <div>
        <ScrollButton/>
      </div>
            </section>
    );
  }
export default About;
