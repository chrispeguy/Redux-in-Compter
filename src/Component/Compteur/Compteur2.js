import React, { useState } from "react";

export default () => {
    const [nber, setNber] = useState(0);

    const Decrease = () => {
        if(nber > 0){
           setNber(nber-1);
        }
    }

    return(
        <div>
            <h2> Compteur dans une "Function Component" </h2>

            <p>  {nber} </p> <br/>

            <button onClick={Decrease}> Decrease (-) </button>
            <button onClick={()=> setNber(0)}> Reset(0) </button>
            <button onClick={()=> setNber(nber+1)}> Increase (+) </button>

        </div>
    )

}; 
