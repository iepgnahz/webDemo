import React, {Component} from 'react';
import SingleInput from './SingleInput';
export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state={
      first_name:'',
      last_name:''
    }
  }

  handleChange(obj){
    this.setState(Object.assign(this.state,obj));
  }

  render() {
    return (
      <div>
        <form onSubmit={()=>{
          console.log(this.state.first_name,this.state.last_name)
        }}>
          <SingleInput value={this.state.first_name} label={'first_name'} handleChange={this.handleChange.bind(this)}/>
          <SingleInput label={'last_name'} value={this.state.last_name} handleChange={this.handleChange.bind(this)}/>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}