// import React, { useState, useEffect } from "react";
// // import { useTheme } from '../../context/Themcontext';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


// import { BASE_URL } from "../../assets/apiRoutes";



// const Show = (props) => {
//   useEffect(() => {
//     fetch(`${BASE_URL}/shows/`)
//       .then((response) => response.json())
//       .then((data) => setShow(data));
//   }, []);

//     let [show, setShow] = useState([]);
//   return (
//     <section>
//     <Swiper
//         className=" mySwiper row container"
//         spaceBetween={1}
//         effect={"fade"}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//       >
//         {show.map((about, key) => (
//           <SwiperSlide key={about._id} className="">
//             <img src={about.image} alt={about.name}  className="col-12"/>
//           </SwiperSlide>

//           /*
//             <section key={about._id} className="col">
//               <div className="card m-2 bg-transparent ">
//                 <img
//                   className="card-img-top p-2 aboutHover"
//                   src={about.image}
//                   alt={about.name}
//                 ></img>
//                 <div className="card-body">
//                           <h3 className="text-center text-light">{about.name}</h3>
//                           <h3 className="text-center text-light">{about.instrument}</h3>
//                           <h6 className="text-center text-light">{about.date}</h6>
//                 </div>
//               </div>
//             </section>*/
//         ))}
//       </Swiper>
//     </section>
    
//   );
// };

// export default Show;
