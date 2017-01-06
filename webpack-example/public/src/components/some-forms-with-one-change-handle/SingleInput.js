import React, {Component,PropTypes} from 'react';

export default class SingleInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <input type="text"
               value={this.props.value}
               name={this.props.label}
               onChange={(e)=>{
                 let obj={
                   [e.target.name]:e.target.value
                 };
                 this.props.handleChange(obj);
               }}/>
      </div>
    )
  }
}

SingleInput.propTypes={
  label: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
};