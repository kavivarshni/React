//EventHandling is a Function is passed as eventhandler istead of string 
import React, { Component } from "react";

class EventHandling extends Component
{
    eventhandler()
    {
         console.log("Button CLicked");
    }
    render()
    {
        return(
            <button onClick={this.eventhandler}>Click here</button>
        );
    }
}
export default EventHandling;