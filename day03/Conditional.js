import React, { Component } from "react";

class Conditional extends Component{
    constructor()
    {
        super()
        {
            this.state={
                isAlive:true,
            }
        }
    }
    render()
    {
        return(this.state.isAlive?<div><h4>isAlive is Working</h4></div>:<div><h4>isAlive is Not Working</h4></div>)
    }
}
export default Conditional;