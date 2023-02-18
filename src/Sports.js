import React, { useState } from "react";
import { Health } from "./Health";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
const Sports=()=>
{
    const [item,setitem]=useState(Health)
    const responsive = {
      superdesktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 6,
      },
      desktop: {
        breakpoint: { max: 1400, min: 1200 },
        items: 5,
      },
     minidesktop: {
         breakpoint: { max: 1200, min: 1100 },
         items: 4,
      },
  
      tablet: {
        breakpoint: { max: 1100, min: 700 },
        items: 3,
        
      },
      mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2,
       
      }
    };
    const navigate=useNavigate();
    const nextpage=()=>
    {
        navigate("/product");
    }
        return (
            <>
                <div>
          <div className="write">
           <p className="h3" style={{width:"200px",textAlign:"center"}}> Sports &</p>
           <p className="h3">Healthcare</p>
           <div className="view">VIEW ALL</div>
           </div>
           <div style={{position:"relative",top:"-40px",height:"460px"}}>
            <Carousel responsive={responsive}>
             
               {
              
                item.map((val)=>
                {
                    return(
                        <>
                        <button onClick={nextpage} className="btn">       
                <div className="mobile">
                <img style={{position:"relative",top:"-30px"}} src={val.img}/>
                <div className="brand">
                <p><b>{val.name}</b></p>
                <p style={{color:"green",paddingTop:"5px"}}>{val.Off}</p>
                <p style={{color:"gray",paddingTop:"5px"}}>{val.brand}</p>
                </div>
                </div>
                </button>
                        </>
                    )
                })
               }
            
            </Carousel>
            </div>
        
         </div>
            </>
        )
}
export default Sports;