import React,{useState} from "react";
import { Devices } from "./Devices";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
const Leftside=()=>
{

 
    const [item,setitem]=useState(Devices);
     return (
        <>
           
         

           <div className="pd">
            <div className="pdt">
            <img  className="monitor"  src={item[0].img}/>
            <img  className="monitor" src={item[1].img}/>
            <img  className="monitor" src={item[2].img}/>
            </div>
           
           <div className="pdd">
            <img  className="monitor1" src={item[0].img}/>
             <div className="favorite">
              <FavoriteIcon/>
             </div>
             </div>
            <div className="crt">
                <div className="addcart">
                    <ShoppingCartIcon/>
                    <p>ADD TO CART</p>
                </div>
                <div className="buynow">
                <FlashOnIcon/>
                    <p>BUY NOW</p>
                 </div>
            </div>
            </div>
        </>
     )
}
export default Leftside;