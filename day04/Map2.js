import React from "react";

function Map2()
{
    const person=[
        {
            id:1,
            name:'Kavivarshni',
            city:'Tiruppur',
        },
        {
            id:2,
            name:'Ranjeeth Raja',
            city:'Coimbatore'
        }
    ];
    const pervar=person.map(pervar=><h4>{pervar.id} {pervar.name}  {pervar.city} </h4>)
    return(
        <>
        {pervar}
        </>
    );
}
export default Map2;