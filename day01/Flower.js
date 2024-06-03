import React,{Component} from 'react';

class Flower extends Component
{
    render()
    {
    const url = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnLFQ0ttvJdQsVen5IOjdkK6-GiDh_2PiEsJYjlaA0Mw4iLHJdl8h5gC90rY42EUiWhE&usqp=CAU${this.props.name}`;
    return (
        <div>

          <img src={url} alt={this.props.name} />
        </div>
      );
    }
}
export default Flower;
