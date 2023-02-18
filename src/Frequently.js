import React, { useState } from "react";
import { Bought } from "./Bought";
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarIcon from '@mui/icons-material/Star';
const Frequently=()=>
{
   
    const [item,setitem]=useState(Bought)
     
          return (
              <>
                  <div>
                  <div className="Review2">
                            <p style={{fontSize:"30px",fontWeight:"600"}}>Frequently bought Together</p>
                            </div>
                        
                            <div className="icon3">
                          <div className="addicon1"><AddIcon/></div>
                          <div className="addicon2"><AddIcon/></div>
                          </div>
                          <div className="checkbox">
                            <div className="checkbox1"><CheckBoxIcon/></div>
                            <div className="checkbox2"><CheckBoxIcon/></div>
                          </div>
                     
                   <div className="wonderfull3">

                  
                 {
                   
                  item.map((val)=>
                  {
                      return(
                          <>
                              
                <div style={{marginTop:"20px"}}>
                <div className="imagesize">
                  <img style={{position:"relative",top:"-30px"}} src={val.img}/></div>
                  <div className="brand">
                  <p style={{width:"220px"}}>{val.name}</p>
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
   
                 </div>
                          
              <div className="wonderfull4">
                
                 <div className="totalitem">
                   <div >
                    <p style={{color:"gray"}}>1 Item</p>
                    <p style={{paddingTop:"5px",fontSize:"20px"}}>Rs 12,999</p>
                   </div>
                   <AddIcon style={{color:"gray"}}/>
                   <div>
                    <p style={{color:"gray",paddingLeft:"5px"}}>2 Add-ons</p>
                    <p  style={{paddingTop:"5px",fontSize:"20px"}}>Rs 13,747</p>
                   </div>
                    <div style={{fontSize:"30px",color:"gray",paddingLeft:"15px",position:"relative",top:"-10px"}}>=</div>
                   <div>
                    <p style={{color:"gray",paddingLeft:"15px"}}>Total</p>
                    <p  style={{paddingTop:"5px",paddingLeft:"15px" ,fontSize:"20px"}}>Rs 26,738</p>
                   </div>
                   </div>
                   <div className="addcart1">
                    <ShoppingCartIcon/>
                    <p>ADD 3 ITEMS TO CART</p>
                </div>
              </div>
          
           </div>
              </>
          )

}
export default Frequently;

