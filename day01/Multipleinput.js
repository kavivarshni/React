import React from 'react';

function multiple({name,age})
{
   
    return( <p><h2>MULTIPLE INPUTS</h2>    <h4>Authorized by {name} {age}</h4></p>)
}
multiple.defaultProps={
    name:"KAVIVARSHNI",
    age:"22",
}

export default multiple;