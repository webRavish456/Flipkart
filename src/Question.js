import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddIcon from '@mui/icons-material/Add';
import GppGoodIcon from '@mui/icons-material/GppGood';
const Question=()=>
{
    return(
        <>
             <div className="review1" style={{display:"flex",paddingBottom:"25px",justifyContent:"space-between"}}>
                            <p  style={{fontSize:"30px",fontWeight:"600"}}>Questions and Answers</p>
                      </div>
                      <div className="engine">
                           <p className="rp1"><SearchIcon/></p>
                           </div>   
                 <div className="wonderfull">
                      <div> 
                      <p style={{fontWeight:"600"}}>Q: Does it have a big plug</p>
                      <p style={{paddingTop:"5px"}}>A: no it has small plug</p>
                      </div>
                    
                        <p  style={{color:"gray",paddingTop:"5px"}}>Wamiq Hussain</p>
                        <div className="verified">
                      <div className="chetan">
                          <CheckCircleIcon style={{paddingRight:"5px"}}/>
                          <p>Certified Buyer</p>
                      </div>
                      <div className="like">
                        <div className="thumb">
                           <ThumbUpIcon style={{paddingRight:"10px",width:"20px"}}/>
                           <p style={{paddingRight:"10px"}}>28</p>
                        </div>
                        <div className="thumb">
                            <ThumbDownIcon style={{transform:"rotateY(180deg)",paddingLeft:"10px",width:"20px"}}/>
                            <p>4</p>
                        </div>
                        </div>
                      </div>
                      </div>

                      <div className="wonderfull">
                      <div> 
                      <p style={{fontWeight:"600"}}>Q: Can I use external speakers in it? I know it has inbuilt speakers, but those are not good enough.</p>
                      <p style={{paddingTop:"5px"}}>A: yes u can, there is an Aux cable given</p>
                      </div>
                    
                        <p style={{color:"gray",paddingTop:"5px"}}>Anonymous</p>
                        <div className="verified">
                      <div className="chetan">
                          <CheckCircleIcon style={{paddingRight:"5px"}}/>
                          <p>Certified Buyer</p>
                      </div>
                      <div className="like">
                        <div className="thumb">
                           <ThumbUpIcon style={{paddingRight:"10px",width:"20px"}}/>
                           <p style={{paddingRight:"10px"}}>12</p>
                        </div>
                        <div className="thumb">
                            <ThumbDownIcon style={{transform:"rotateY(180deg)",paddingLeft:"10px",width:"20px"}}/>
                            <p>0</p>
                        </div>
                        </div>
                      </div>
                      </div>

                      <div className="wonderfull">
                      <div > 
                      <p style={{fontWeight:"600"}}>Q: can i connect my ps4?</p>
                      <p style={{paddingTop:"5px"}}>A: yes you can</p>
                      </div>
                    
                        <p  style={{color:"gray",paddingTop:"5px"}}>Anonymous</p>
                        <div className="verified">
                      <div className="chetan">
                          <CheckCircleIcon style={{paddingRight:"5px"}}/>
                          <p>Certified Buyer</p>
                      </div>
                      <div className="like">
                        <div className="thumb">
                           <ThumbUpIcon style={{paddingRight:"10px",width:"20px"}}/>
                           <p style={{paddingRight:"10px"}}>16</p>
                        </div>
                        <div className="thumb">
                            <ThumbDownIcon style={{transform:"rotateY(180deg)",paddingLeft:"10px",width:"20px"}}/>
                            <p>1</p>
                        </div>
                        </div>
                      </div>
                      </div>
    
                <div className="wonderfull">
                <div className="allquestion">
                <p style={{color:"blue"}}>All questions</p>
                <div style={{color:"gray",paddingRight:"15px"}}><AddIcon/></div>
                </div>
                    
                </div>

                    <div className="goodicon">
                      <div><GppGoodIcon/></div> 
                      <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p> 
                    </div> 
                     
                    
        </>
    )
}
export default Question;