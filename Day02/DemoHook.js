import React, { useState } from 'react';
function DemoHook()
{
    const [count,setcount]=useState(0);
    return(
        <div>
            <button onClick={()=>setcount(count+1)}>Count ++</button>
            <p>{count} </p>
        </div>
    )
}export default DemoHook;  

