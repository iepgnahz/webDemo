import React, {Component} from 'react';
import Radio from './Radio';
export default class ControlledSelfForms extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:'A'
    }
  }

  handleChange(e){}

  render() {
    return (
      <div>
        <Radio value={this.state.value} name='selectQuestion' onChange={(e)=>{
          this.setState({
            value:e.target.value
          })
        }}>
          <option value='A'>first option</option>
          <option value='B'>second option</option>
          <option value='C'>third option</option>
          <option value='D'>fourth option</option>
        </Radio>

      </div>
    )
  }
}