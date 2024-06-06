//to call the class component  use this.state
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component
{
    constructor()
    {
        super()
        {
            this.state={
                ParentName:"parent",
                isAlive:true,
            }
           
        };
        this.displayme=this.displayme.bind(this);
    }
    displayme(mycompany)
    {
        alert(`${this.state.ParentName} ${mycompany}`);
    }
    render()
    {
        return(
            <div>
                <ChildComponent name={this.displayme} />
            </div>
        );
    }
}
export default ParentComponent;