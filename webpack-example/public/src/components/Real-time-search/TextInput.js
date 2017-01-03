import React, {Component} from 'react';
import '../../style/search.css';
export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <input type="text" placeholder="Type here" className="textInput col-xs-12" onChange={this.props.onChange}/>
      </div>
    )
  }
}