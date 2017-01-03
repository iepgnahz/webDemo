import React, {Component} from 'react';
import AnswerRadioInput from './AnswerRadioInput';
import uniqueid from 'uniqueid'
export default class AnswerMultipleChoiceQuestion extends Component {
  constructor(props){
    super(props);
    this.state={
      name:uniqueid('choice-'),
      value: ''
    }
  }

  onValueChange(value){
    this.setState({
      value
    })
  }

  render(){
    return (
      <div>
        <label>
          {this.props.label}
          {this.props.selectArray.map((item,index)=>{
            return (
              <AnswerRadioInput label={item} value={item} name={this.state.name} checked={this.state.value === item} onValueChange={this.onValueChange.bind(this)} key={index}/>
            )
          })}

        </label>
        <div>
          最后的答案是：{this.state.value}
        </div>

      </div>
    )
  }

}

AnswerMultipleChoiceQuestion.propTypes={
  label: React.PropTypes.string,
  selectArray: React.PropTypes.array
};