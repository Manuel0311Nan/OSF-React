import React, { useState, useEffect } from "react";
// import { useTheme } from '../../context/Themcontext';
import { BASE_URL } from "../../assets/apiRoutes";
// import { Link } from 'react-router-dom';
const About = () => {
  // const { theme } = useTheme();
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
  // const [band, setBand] = useState([]);
  let [abot, setAbot] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/about/`)
      .then((response) => response.json())
      .then((data) => setAbot(data));
  }, []);
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
    return (
        <section className="aboutBG">
      <div className="container">
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
    );
  }
// };
export default About;
