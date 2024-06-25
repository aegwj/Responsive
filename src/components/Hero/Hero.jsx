
import './Hero.css';
import { useContext, useState, useEffect } from "react";
import dark_arrow from "../../assets/dark-arrow.png";


const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>我们是世界上最好的教育</h1>
        <p>
          
        </p>
        <button className="btn">Explre more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
