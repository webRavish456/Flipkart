import React, { useState } from "react";
import { products } from "./Products";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarIcon from '@mui/icons-material/Star';
import Interested from "./Interested";
import About from "./About";
import Topstory from "./Topstory";
const Similar=()=>
{
     const [item,setitem]=useState(products)
 
     const responsive = {
        superdesktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 7,
        },
        desktop: {
          breakpoint: { max: 1400, min: 1200 },
          items: 6,
        },
       minidesktop: {
           breakpoint: { max: 1200, min: 1100 },
           items: 5,
        },
    
        tablet: {
          breakpoint: { max: 1100, min: 700 },
          items: 4,
          
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 3,
         
        }
      };
          return (
              <>
                    <Interested/>

                  <div style={{marginLeft:"10px",marginRight:'10px'}}>
   
                  <div className="suggest1">
                    <p style={{fontSize:"22px",fontWeight:"500"}}>Similar products</p>

              

             <div style={{position:"relative",top:"40px"}}>
              <Carousel responsive={responsive}>
               
                 {
                
                  item.map((val)=>
                  {
                      return(
                          <>
                              
                  <div className="mobile2">
                  <img style={{position:"relative",top:"-30px",width:"150px"}} src={val.img}/>
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
                          </>
                      )
                  })
                 }
              
              </Carousel>
              </div>
              </div>
           </div>
             <Topstory/>
             <div className="social">
             <About/>
             </div>
             
              </>
          )


}
export default Similar;