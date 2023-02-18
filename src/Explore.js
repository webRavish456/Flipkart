import React, { useState } from "react";
import { Interest } from "./Interest";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
const Explore=()=>
{
    const [item, setitem] = useState(Interest)
     
    const responsive = {
      superdesktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 4,
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

    const navigate=useNavigate();
    const nextpage=()=>
    {
        navigate("/product");
    }
        return (
            <>
                <div>
                
                <div className="suggest">
                    <p style={{fontSize:"20px"}}>Suggested for You</p>
                    <p style={{color:"gray"}}>Inspired by Your Interest</p>
                </div>
                <div style={{width:"100%",display:"flex",justifyContent:"end",marginLeft:"-50px"}}>
                <div className="view1">VIEW ALL</div></div>
                <div style={{borderBottom:"2px solid lightgray",paddingBottom:"30px",boxSizing:"border-box"}}></div>
           <div style={{position:"relative",top:"40px"}}>
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
                <div className="rating">
                <p style={{color:"white",backgroundColor:"green",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",height:"25px",alignItems:"center",borderRadius:"3px",marginTop:"5px"}}>{val.rating}<StarIcon style={{width:"14px"}}/></p>
                <p style={{color:"gray",paddingTop:"8px",paddingLeft:"10px"}}>{val.number}</p>
                </div>
                <div className="off">
                <p style={{paddingTop:"5px"}}>{val.Aprice}</p>
               <del style={{color:"gray"}}>  <p style={{color:"gray",paddingTop:"5px",paddingLeft:"10px"}}>{val.Eprice}</p></del>
                <p style={{color:"green",paddingTop:"5px",paddingLeft:"10px"}}>{val.Off}</p>
                </div>
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
export default Explore;