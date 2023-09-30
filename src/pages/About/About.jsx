import React
 //{ useState, useEffect } 
 from "react";
// import { useTheme } from '../../context/Themcontext';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
//import { BASE_URL } from "../../assets/apiRoutes";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./About.module.scss"
import { ScrollButton } from "../../components/ScrollButton/ScrollButton";
// import { Link } from 'react-router-dom';
const About = () => {
/*
  let [abot, setAbot] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/about/`)
      .then((response) => response.json())
      .then((data) => setAbot(data));
  }, []);*/

  let group =
    [{
      'name': 'Karl',
      'instrument': 'Bajo',
      'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1655827785/conciertos/WhatsApp_Image_2022-06-21_at_5.16.49_PM_1_h93ssa.jpg',
      'description': 'Nacido en Madrid',
      'date': '16/08/1986'
    },
    {
      'name': 'Lano',
      'instrument': 'Guitarra',
      'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1655827785/conciertos/WhatsApp_Image_2022-06-21_at_5.16.49_PM_2_fkw59v.jpg',
      'description': 'Nacido en Madrid',
      'date': '19/11/1984'
      },
      {
        'name': 'Rott',
        'instrument': 'Voz',
        'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1655827785/conciertos/WhatsApp_Image_2022-06-21_at_5.16.49_PM_3_safrfc.jpg',
        'description': 'Nacido en Madrid',
        'date': '11/12/1980'
      },
      {
        'name': 'Jose',
        'instrument': 'Guitarra',
        'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1655827785/conciertos/WhatsApp_Image_2022-06-21_at_5.16.48_PM_t1mbju.jpg',
        'description': 'Nacido en Madrid',
        'date': '12/08/1984'
      },
      {
        'name': 'Paris Lakryma',
        'instrument': 'Batería',
        'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1655827784/conciertos/WhatsApp_Image_2022-06-21_at_5.16.49_PM_qddyou.jpg',
        'description': 'Nacido en Madrid',
        'date': '22/05/1987'
    }]
  let photos = 
    [{
      'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1682157183/conciertos/Fotos/IMG_2023_gjk2bu.jpg',
      'city': 'Gijón',
    },
    {
      'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1680189967/conciertos/Fotos/IMG_1679_undzgz.jpg',
      'city': 'Madrid',
    },
    {
      'image': 'https://res.cloudinary.com/manuelcodex/image/upload/v1682157183/conciertos/Fotos/IMG_2218_qvsypv.jpg',
      'city': 'Madrid',
    }]
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
      {photos.map((photo, key) => (
        <SwiperSlide key={photo._id} className="">
          <img src={photo.image} alt={photo.name}  className="col-11  d-none d-lg-block"/>
        </SwiperSlide>

      ))} 
        </Swiper>
        <section className="aboutBG ">
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-7 row-cols-lg-5 align-content-center galleryGroup">
           {group.map((about, key) => (
            <section key={about._id} className="col">
              <div className="card m-2 bg-transparent ">
                <img
                  className="card-img-top p-2 aboutHover"
                  src={about.image}
                  alt={about.name}
                ></img>
                <div className="card-body">
                          <h3 className="text-center text-light">{about.name}</h3>
                          <h5 className="text-center text-danger">{about.instrument}</h5>
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
