import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReplyIcon from '@mui/icons-material/Reply';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Rating from "./Rating";
import Question from "./Question";
import Display from "./Display";
import ProductDescription from "./PrdtDescript";
import Specification from "./Specification";
import Frequently from "./Frequently";
import StarIcon from '@mui/icons-material/Star';

const Sidebar=()=>
{
     
    return(
        <>
            <div className="side">
            <div className="sidebar">
            <div className="righticon">
               <p>Home</p>
               <KeyboardArrowRightIcon/>
            </div>
            <div className="righticon">
               <p>Monitor</p>
               <KeyboardArrowRightIcon/>
            </div>

            <div className="righticon">
               <p>ASUS Monitor</p>
               <KeyboardArrowRightIcon/>
            </div>
               </div>
           <div className="righticon1">
               <div className="reply"><ReplyIcon/></div>
               <p style={{color:"black"}}>Share</p> 
           </div>

              <p  style={{fontSize:"28px",paddingTop:"10px",paddingLeft:"20px"}}>ASUS MONITOR</p> 
              <div className="rating" style={{paddingLeft:"20px"}}>
                <p style={{color:"white",backgroundColor:"green",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",height:"25px",alignItems:"center",borderRadius:"3px",marginTop:"5px"}}>4.2<StarIcon style={{width:"14px"}}/></p>
                <p style={{color:"gray",paddingTop:"8px",paddingLeft:"10px",fontSize:"18px"}}>14 Ratings & 2 Reviews</p>
                </div>
        
                <div className="off"  style={{paddingLeft:"20px"}}>
                <p style={{paddingTop:"5px",fontSize:"32px"}}>Rs 12,999</p>
               <del style={{color:"gray"}}>  <p style={{color:"gray",paddingTop:"10px",paddingLeft:"10px",fontSize:"26px"}}>25,999</p></del>
                <p style={{color:"green",paddingTop:"12px",paddingLeft:"10px",fontSize:"20px"}}>50% Off</p>
                 <div style={{color:"lightgray",paddingLeft:"5px",paddingTop:"10px"}}><InfoIcon/></div>
                </div>
                
                <p style={{fontSize:"17.5px",paddingTop:"10px",paddingLeft:"20px",color:"red"}}>Hurry, Only a few left!</p>
                <p style={{fontSize:"25px",paddingTop:"10px",paddingLeft:"20px"}}>Available Offers</p>
        
                  <div className="bank">
                   <div className="offer">
                    <div style={{color:"green"}}><LocalOfferIcon/></div>
                    <span style={{paddingLeft:"5px"}}><sapn style={{fontWeight:"600"}}>Bank Offer</sapn> 10% off on HSBC Bank Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above <span style={{color:"blue",fontWeight:"600"}}>T&C</span></span>
                    </div>
                    <div className="offer">
                    <div style={{color:"green"}}><LocalOfferIcon/></div>
                    <span style={{paddingLeft:"5px"}}><sapn style={{fontWeight:"600"}}>Bank Offer</sapn> 10% off on OneCard Credit Card EMI Transactions, up to ₹1500. On orders of ₹5,000 and above <span style={{color:"blue",fontWeight:"600"}}>T&C</span></span>
                    </div>
                    <div className="offer">
                    <div style={{color:"green"}}><LocalOfferIcon/></div>
                    <span style={{paddingLeft:"5px"}}><sapn style={{fontWeight:"600"}}>Bank Offer</sapn> 5% Cashback on Flipkart Axis Bank Card<span style={{color:"blue",fontWeight:"600"}}> T&C</span></span>
                    </div>
                    <div className="offer">
                    <div style={{color:"green"}}><LocalOfferIcon/></div>
                    <span style={{paddingLeft:"5px"}}>Buy this Product and Get Extra ₹500 Off on Two-Wheelers <span style={{color:"blue",fontWeight:"600"}}>T&C</span></span>
                    </div>
                  </div>
                   
                    <p style={{fontSize:"17px",paddingTop:"10px",paddingLeft:"20px",color:"blue"}}>View 5 more offers</p>

                    <div className="exchange">
                        <div className="withexchange">
                            <div style={{color:"blue"}}><RadioButtonCheckedIcon/></div>
                            <p style={{paddingLeft:"10px",fontSize:"16px",display:"flex",alignItems:"center"}}>Buy without Exchange</p>
                            <p style={{fontSize:"16px",width:"220px",display:"flex",alignItems:"center",position:"relative",justifyContent:"end"}}>Rs12,999</p>
                        </div>
                        </div>

                       <div className="exchange1" disabled={true}>
                        <div className="withoutexchange">
                            <div style={{color:"gray"}}><RadioButtonUncheckedIcon/></div>
                            <p style={{paddingLeft:"10px",fontSize:"16px",display:"flex",alignItems:"center",color:"gray"}}>Buy with Exchange</p>
                            <p style={{fontSize:"16px",width:"250px",display:"flex",alignItems:"center",position:"relative",justifyContent:"end",color:"gray"}}> up to Rs 2000 off</p>
                            </div>
                            <p style={{color:"red",paddingTop:"12px",paddingLeft:"30px",fontSize:"17px"}}>Enter pincode to check if excahnge is avaliable</p>
                        </div>
                      
        
                        <div className="warren">
                           <div className="warrenimage"> <img style={{width:"30px"}} src="data:image/png;base64,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"/>
                            </div>
                             <p className="warrenty">2 Year Warranty</p>
                      </div>
                      <Display/>
                      <ProductDescription/>
                      <Specification/>
                      <Frequently/>
                      <Rating/>
                      <Question/>
                     
            </div>
        </>
    )

}
export default Sidebar;