import React,{Component} from 'react';
class Inhericc extends Component
{
    render()
    {
        return( <div><h3>Passing Property from One Component to Another</h3>This is Parent Component by name={this.props.name} 
        <ChildInhericc username={this.props.name} />
        </div>);
    }
}

class ChildInhericc extends Component
{
    render()
    {
      //  console.log(this.props);
        let id="5678";
        let name="Kavi";
        return(<div>This is Child Component name={this.props.username}  wrt={id} </div>);
    }
}

export default Inhericc;