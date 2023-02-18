import React from "react";
import Offer from "./Offer";
import Productvalue from "./Productvalue";
import Images from "./Images";
import About from "./About";
import "./index.css"
import Similar from "./Similar";
const Productpage=()=>
{
    return (
        <>
           <Productvalue/>
           <Offer/>
           <Images/>
           <div className="lastpage">
           <Similar/>
           </div>
        </>
    )
}
export default Productpage;