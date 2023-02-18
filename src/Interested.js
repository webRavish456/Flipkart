import React, { useState } from "react";
import { Might } from "./Might";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Interested=()=>
{
         
    const [item,setitem]=useState(Might);

    const responsive = {
      superdesktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 1400, min: 1200 },
        items: 3,
      },
     minidesktop: {
         breakpoint: { max: 1200, min: 1100 },
         items: 2,
      },
  
      tablet: {
        breakpoint: { max: 1100, min: 700 },
        items: 2,
        
      },
      mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
       
      }
    };
        return (
            <>
                <div style={{marginLeft:"10px",marginRight:"10px"}}>
                <div className="suggest2">
                    <p style={{fontSize:"26px",fontWeight:"500"}}>You might be interested in</p>
          
            <Carousel responsive={responsive}>
             
               {
              
                item.map((val)=>
                {
                    return(
                        <>
                            
                <div className="mob">
                <img style={{position:"relative",width:"110px",height:"120px",objectFit:"fill"}} src={val.img}/>
                <div className="sm">
                <p><b>{val.name}</b></p>
                <p style={{color:"gray",paddingTop:"5px"}}>{val.Off}</p>
                <p className="view2" style={{paddingTop:"5px"}}>{val.shop}</p>
                </div>
                </div>
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
export default Interested;