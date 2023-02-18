import React from "react";
import Description from "./Description";
import Electronics from "./Electronics";
import "./index.css";
import Product from "./Product";
import SliderPage from "./Sliderpage";
import About from "./About";
import Story from "./Story";
import Beauty from "./Beauty";
import Sports from "./Sports";
import Explore from "./Explore";
import Appliances from "./Appliances";
import Productvalue from "./Productvalue";
function Home() {

  return (
    <>
        <Productvalue/>

       <div className="product">
           <Product/>
       </div>
       <div className="SliderPage">
        <SliderPage/>
       </div>
       <div className="design">
        <Electronics/>
       </div>
       <div className="design">
        <Beauty/>
       </div>
       <div className="design2">
        <Sports/>
       </div>
       <div className="design1">
        <Explore/>
       </div>
       <div className="design2">
        <Appliances/>
       </div>
         <div className="describe">
          <Story/>
         </div>
       <div className="describe">
          <Description/>
       </div>
       <div className="social">
        <About/>
       </div>
    </>
   
  )
 
}

export default Home;