import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";
import tv from "./Tv.png";
import aeroplane from "./Aeroplane.png";
import mobile from "./phone.png";
import  monitor  from "./Monitor.png";

const fadeImages = [
   tv,
   mobile,
   monitor,
   aeroplane,
];

export default function SliderPage() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img  style={{width:"20%",height:"260px"}} src={fadeImages[0]} alt="logo" />
          
        </div>
        <div className="each-fade">
          <img style={{width:"20%",height:"260px"}} src={fadeImages[1]} alt="logo" />
        </div>
        <div className="each-fade">
          <img style={{width:"20%",height:"260px"}} src={fadeImages[2]} alt="logo" />
        </div>
        <div className="each-fade">
          <img style={{width:"40%",height:"260px"}} src={fadeImages[3]} alt="logo"/>
        </div>
      </Fade>
    </div>
  );
}