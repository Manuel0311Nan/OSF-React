import React, { useState, useEffect } from "react";
import "./SplashScreen.scss";
const SplashScreen = () => {
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    setTimeout(() => setAnimation("fadeOut"), 3000);
  }, []);
  return (
    <div className="splashScreen">
      <div className={animation}>
        <h1 className="text" >conoce a One Second Faith</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
