import React, { useState, useEffect } from "react";
import "./SplashScreen.scss";
const SplashScreen = () => {
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    setTimeout(() => setAnimation("fadeOut"), 3000);
  }, []);
  return (
    <section className="bgBlack">
    <div className="container">
      <div className="splashScreen ">
        <h1 className="text aling-self-center" >conoce a One Second Faith</h1>
      </div>
      </div>
      </section>
  );
};

export default SplashScreen;
