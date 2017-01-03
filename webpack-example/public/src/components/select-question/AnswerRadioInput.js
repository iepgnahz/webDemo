import React, {Component} from 'react';
import uniqueid from 'uniqueid';
export default class AnswerRadioInput extends Component {
  constructor(props){
    super(props);
    this.state={
      checked: !!this.props.checked,

    }
  }

  render(){
    return (
      <div>
        <label >
          <input type='radio'
                 value={this.props.value}
                 checked={this.state.checked}
                 name={this.props.name}
                 onChange={(e)=>{
                   this.setState({
                     checked: e.target.checked
                   });
                   if(e.target.checked) {
                     this.props.onValueChange(e.target.value)
                   }
                 }}
          />
          {this.props.label}
        </label>
      </div>
    )
  }

}


AnswerRadioInput.propTypes={
  label: React.PropTypes.string,
  onValueChange: React.PropTypes.func,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  checked: React.PropTypes.boolean
};