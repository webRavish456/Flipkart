import React,{useState} from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Productvalue=()=>
{

    const handleinput=(e)=>
  {
       const value=e.target.value;
  }

  const [show,setshow]=useState(true);
  const handleshow=()=>
  {
     
     setshow(!show);
  }
  const moreshow=()=>
  {
     setshow(!show);
  }



    return(
        <>
            <div className="heading">
             <div className="flipkart">
            <img style={{width:"90px"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"/>
              <p style={{fontSize:"13px",cursor:"pointer",position:"relative",top:"-10px"}}>Explore <span style={{color:"yellow"}}>Plus</span></p>
             </div>
             <div>
             <input type="text" placeholder="Search for products, brands and more"  onChange={handleinput}/>
              <SearchIcon style={{position:"absolute",marginLeft:"-30px",marginTop:"15px",color:"rgb(15, 110, 252);"}}/>
             </div>
             <div className="account">
             <p style={{marginLeft:"40px"}}>My Account</p>
           { show ? <button className="button" style={{color:"white"}} onClick={handleshow}>
             <ExpandMoreIcon/>
            </button> : <button className="button" style={{color:"white"}} onClick={handleshow}>
             <ExpandLessIcon/>
            </button>}
             <p>Become a Seller</p>
             <p>More</p>
             { show ? <button className="button" style={{color:"white",position:"relative",right:"8px"}} onClick={moreshow}>
             <ExpandMoreIcon/>
            </button> : <button className="button" style={{color:"white",position:"relative",right:"8px"}} onClick={moreshow}>
             <ExpandLessIcon/>
            </button>}
             <span style={{position:"relative",left:"10px"}}><ShoppingCartIcon/></span><span>Cart</span>
             </div>       
       </div>
        </>
    )
}
export default Productvalue;