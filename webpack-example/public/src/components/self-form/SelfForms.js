import React, {Component} from 'react';
import Radio from './Radio';
export default class SelfForms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Radio defaultValue="B" name='selectQuestion'>
          <option value='A'>first option</option>
          <option value='B'>second option</option>
          <option value='C'>third option</option>
          <option value='D'>fourth option</option>
        </Radio>
      </div>
    )
  }
}