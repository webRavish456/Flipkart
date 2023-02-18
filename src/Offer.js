import React,{useState} from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./index.css"
const Offer=()=>
{

    const [show1,setshow1]=useState(true);
    const [show2,setshow2]=useState(true);
    const [show3,setshow3]=useState(true);
    const [show4,setshow4]=useState(true);
    const [show5,setshow5]=useState(true);
    const [show6,setshow6]=useState(true);
    const [show7,setshow7]=useState(true);
   

  const handleshow1=()=>
  {
     
     setshow1(!show1);
  }
  const handleshow2=()=>
  {
     
     setshow2(!show2);
  }
  const handleshow3=()=>
  {
     
     setshow3(!show3);
  }
  const handleshow4=()=>
  {
     
     setshow4(!show4);
  }
  const handleshow5=()=>
  {
     
     setshow5(!show5);
  }
  const handleshow6=()=>
  {
     
     setshow6(!show6);
  }
  const handleshow7=()=>
  {
     
     setshow7(!show7);
  }
 
    return (
        <>
            <div className="showapply">
                <div >
                    { show1 ? <div className="apply"><p>Electronics</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow1}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>Electronics</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow1}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>
             
                <div >
                    { show2 ? <div className="apply"><p>TVs & Appliances</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow2}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>TVs & Appliances</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow2}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>

                <div >
                    { show3 ? <div className="apply"><p>Men</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow3}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>Men</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow3}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>

                <div >
                    { show4 ? <div className="apply"><p>Women</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow4}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>Women</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow4}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>
                <div >
                    { show5 ? <div className="apply"><p>Baby & Kids</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow5}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>Baby & Kids</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow5}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>
                <div >
                    { show6 ? <div className="apply"><p>Home & Furniture</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow6}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>Home & Furniture</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow6}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>
                <div >
                    { show7 ? <div className="apply"><p>Sports, Books and More</p>
                    <button className="bn" style={{color:"gray"}} onClick={handleshow7}>
             <ExpandMoreIcon/>
            </button> </div>: <div className="apply"><p style={{color:"blue"}}>Sports, Books and More</p>
                    <button className="bn" style={{color:"blue"}} onClick={handleshow7}>
             <ExpandLessIcon/>
            </button> </div>}
                </div>
               
                 <div className="apply"><p>Flights</p>
               </div>
             
                <div >
                <div className="apply"><p>Offer Zone</p>
               </div>
                </div>

            </div>
            
        </>
    )
}
export default Offer;
