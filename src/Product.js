import React, { useState } from "react"
import { Database } from "./Database";
import "./index.css";
const Product=()=>
{

    const [item,setitem]=useState(Database);

    function cur(val)
    {
         return (
            <>
             <div className="name">
              <img style={{height:"80px"}} src={val.img}/>
              <p style={{fontWeight:"600"}}>{val.name}</p>
            </div>
            </>
         )
    }
    return (
        <>
              <div className="item">
               {item.map(cur)}
           </div>
        </>
    )
}
export default Product;