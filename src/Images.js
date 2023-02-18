import React from "react";

import Leftside from "./Leftside";

import Sidebar from "./Sidebar";

const Images=()=>
{
        
    
  
      return(
        <>
            <div className="all">
              <div className="leftside">
                <Leftside/>
              </div>
            <div className="rightside">
                <Sidebar/>
            </div>
         
            </div>
          
           
           
        </>
      )
}
export default Images;
