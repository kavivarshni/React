import React, { Component } from 'react';

class State extends Component
{
    constructor()
        {
            super();
            this.state={
                name:"Abhinayasree",
                age:21,
            };
            this.updatestate=this.updatestate.bind(this);
         }
        updatestate()
        {
         this.setState({
             name:"Kavivarshni ",
             age:22,
         });
        } 
        render()
        {
        return(
            <div>
            <p>{this.state.name} {this.state.age} </p>
            <button onClick={ this.updatestate}> Change name </button>
           </div>        
        );       
    }
}
export default State;