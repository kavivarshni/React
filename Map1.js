import React from "react";

function Map1()
{
    const frnds=["Vanathi","Sathya","Muppatha"];
    const upper=frnds.map(i=><h5 >{i.toUpperCase()}</h5>)
   
            
    return(
        <>
        {upper}
       
       </>
    );
}
export default Map1;