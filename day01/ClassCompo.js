import React,{Component} from 'react';

class ClassCompo extends Component
{
    render()
    {
        return(<p><h2> CLASS COMPONENT </h2><h4>This is from Class Component {this.props.name}</h4></p>)
    }
}
export default ClassCompo;