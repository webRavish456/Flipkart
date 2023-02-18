import React from "react"
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
const Rating=()=>
{
   return(
    <>
        
        <div className="Review">
                            <p style={{fontSize:"30px",fontWeight:"600"}}>Ratings & Reviews</p>
                            <div className="rate">
                                <p className="rp">Rate Product</p>
                            </div>

                            <div>
                                <div>
                                <p style={{fontSize:"20px"}}>4.6 <StarIcon style={{width:"20px",top:"5px",position:"relative"}}/> </p>
                                <p style={{color:"gray"}}>14 Ratings &</p>
                                <p style={{color:"gray",paddingBottom:"25px"}}>2 Reviews</p>
                                </div>
                               <div>
                                   
                               </div>
                            </div>
                      </div>
                 <div className="wonderfull">
                      <div className="rating">
                      <p style={{color:"white",backgroundColor:"green",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",height:"25px",alignItems:"center",borderRadius:"3px",marginTop:"5px"}}>5<StarIcon style={{width:"14px"}}/></p>
                      <p style={{paddingTop:"8px",paddingLeft:"10px",fontSize:"18px"}}>Wonderful</p>
                      </div>
                      <div className="great"> 
                      <p>Great product...</p>
                      </div>
                      <div className="package">
                      <p>Package came with</p>
                      <p>1. Body</p>
                      <p>2. Lens 24-200</p>
                      <p>3. Strip</p>
                      <p>4. Battery</p>
                      <p>5. Extra battery</p>
                      <p>6. Charger and cable</p>
                      <p>7. 64gb high speed memory card</p>
                      <p>8. User manual & service warranty card</p>
                      <p>9. Lens cap</p>
                      <p>10. USB connector cable</p>
                      </div>
                     
                      <div className="verified">
                      <div className="chetan">
                          <p style={{paddingRight:"5px"}}><b>chetan shet</b></p>
                          <CheckCircleIcon style={{paddingRight:"5px"}}/>
                          <p>Certified Buyer, Kumta Dec, 2022</p>
                      </div>
                      <div className="like">
                        <div className="thumb">
                           <ThumbUpIcon style={{paddingRight:"10px",width:"20px"}}/>
                           <p style={{paddingRight:"10px"}}>503</p>
                        </div>
                        <div className="thumb">
                            <ThumbDownIcon style={{transform:"rotateY(180deg)",paddingLeft:"10px",width:"20px"}}/>
                            <p>54</p>
                        </div>
                        </div>
                      </div>
                      </div>

                      <div className="wonderfull">
                      <div className="rating">
                      <p style={{color:"white",backgroundColor:"green",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",height:"25px",alignItems:"center",borderRadius:"3px",marginTop:"5px"}}>5<StarIcon style={{width:"14px"}}/></p>
                      <p style={{paddingTop:"8px",paddingLeft:"10px",fontSize:"18px"}}>Highly Recommended</p>
                      </div>
                      <div className="great"> 
                      <p>Mind blowing</p>
                     </div>
                     
                      <div className="verified">
                      <div className="chetan">
                          <p style={{paddingRight:"5px"}}><b>Lakhan Tailor</b></p>
                          <CheckCircleIcon style={{paddingRight:"5px"}}/>
                          <p>Certified Buyer, Bhilwara Nov, 2021</p>
                      </div>
                      <div className="like">
                        <div className="thumb">
                           <ThumbUpIcon style={{paddingRight:"10px",width:"20px"}}/>
                           <p style={{paddingRight:"10px"}}>303</p>
                        </div>
                        <div className="thumb">
                            <ThumbDownIcon style={{transform:"rotateY(180deg)",paddingLeft:"10px" ,width:"20px"}}/>
                            <p>48</p>
                        </div>
                        </div>
                      </div>
                      </div>
    </>
   )
}
export default Rating;