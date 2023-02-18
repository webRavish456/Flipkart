import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpIcon from '@mui/icons-material/Help';
import StarIcon from '@mui/icons-material/Star';
const Display=()=>
{
      return (
        <>
            <div className="watch">
            
              <div className="display">
                 <p style={{color:"gray",fontSize:"17px"}}>Display Size</p>
                 <div className="inch">21.5 inch</div>
                 <div className="inch">23.8 inch</div>
                 <div className="inch">27 inch</div>
              </div>

            <div className="display1">
            <p style={{color:"gray",fontSize:"17px"}}>Delivery</p>
            <div className="delivery">
              <LocationOnIcon/>
              <p style={{paddingLeft:"5px"}}>Enter Delivery Pincode</p>
              <p  style={{paddingLeft:"5px",color:"blue"}}>Check</p>
              <div className="pincode"><p>Enter Pincode</p></div>
            </div>
            </div>
            <div className="border"></div>
            <div className="timing">
                <p>Delivery by 23 Feb, Wednesday</p>
                <div className="bdr"></div>
                <p style={{color:"green",paddingLeft:"5px"}}>Free</p>
               
                <del><p style={{color:"gray",paddingLeft:"5px"}}>Rs40</p></del>
                <HelpIcon style={{color:"gray",paddingLeft:"5px",width:"20px",marginTop:"-5px"}}/>
            </div>
           
             <p style={{marginLeft:"120px"}}>if order before 5:30 PM</p>
             <p style={{marginLeft:"120px",color:"blue",paddingTop:"10px"}}>View Details</p>

             <div className="display2">
             <p style={{color:"gray",fontSize:"17px"}}>Highlights</p>
             <div className="highlight">
                <ul>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>Panel Type: IPS Panel</li>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>Screen Resolution Type: Full HD</li>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>VGA Support | HDMI</li>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>Inbuilt Speaker</li>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>Brightness: 250 nits</li>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>Response Time: 4 ms | Refresh Rate: 75 Hz</li>
                    <li style={{fontSize:"17.5px",paddingBottom:"5px"}}>HDMI Ports - 1</li>
                </ul>
             </div>
             <div className="emi">
             <p style={{color:"gray",fontSize:"17px"}}>Easy Payment Options</p>
             <div>
                <ul>
                    <li style={{fontSize:"17px",paddingBottom:"5px"}}>EMI starting from ₹294/month</li>
                    <li style={{fontSize:"17px",paddingBottom:"5px"}}>Cash on Delivery</li>
                    <li style={{fontSize:"17px",paddingBottom:"5px"}}>Net banking & Credit/ Debit/ ATM card</li>
                </ul>
                <p style={{color:"blue",paddingTop:"5px"}}>View Details</p>
             </div>
            
             
              </div>
              </div>
            

             <div className="display2">
             <p style={{color:"gray",fontSize:"17px"}}>Seller</p>
             <div className="emi2">
                <p style={{color:"blue",paddingRight:"5px"}}>MTAILMODEECOM</p>
                <p style={{color:"white",backgroundColor:"blue",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",height:"25px",alignItems:"center",borderRadius:"20px"}}>4.8<StarIcon style={{width:"14px"}}/></p>
             </div>
             <div>
             </div>
             </div>
             <div className="highlight1">
             <ul>
                <li>7 day seller replacement policy/brand assistance for device issues* <HelpIcon style={{color:"gray",width:"20px",position:"relative",top:"5px"}}/></li>
               <li>GST invoice available <HelpIcon style={{color:"gray",width:"20px",position:"relative",top:"5px"}}/></li>
               
             </ul>
             </div>   
          
             <p style={{marginLeft:"105px",color:"blue",paddingTop:"5px"}}>See other sellers</p>
              <div className="em3">  
              <img style={{width:"300px",height:"80px"}} src="data:image/png;base64,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"/> 
               <p style={{paddingTop:"5px",fontSize:"18px",paddingLeft:"10px"}}>For Every Rs 100 spent,
                <br></br><p>you earn 2 super Coins</p>
                 <p style={{color:"gray"}}>Max 50 coins per order</p></p>
                 </div>

                 <div className="display2">
                 <p style={{color:"gray",fontSize:"17px"}}>Description</p>
                 <p style={{paddingLeft:"40px",paddingBottom:"80px"}}>You can complete your office work without any interruptions on the Acer 54.61 cm (21.5) Full HD Desktop Monitor. With a thickness of up to 6.6 mm, this desktop monitor has a sleek and elegant design. Also, its frameless display offers a clear and immersive viewing experience. And, thanks to its geometric stand, this monitor can be easily placed in the room anywhere you want. Additionally, the inbuilt speakers of this desktop monitor provide enhanced sound.</p>
                 </div>
           </div>
        </>
      )
}
export default Display;