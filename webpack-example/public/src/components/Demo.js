import React, {Component} from 'react';
import Rotation from 'react-rotation';
export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render(){
    return (
      <div>
        <input type="text"  onChange={(e)=>{

          this.setState({
            value:e.target.value
          })
        }}/>

        <div >
          {this.state.value}
        </div>
      </div>
    )
  }

}