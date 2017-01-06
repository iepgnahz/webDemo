import React, {Component} from 'react';

export default class CheckBoxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [true,false,false,false]
    }
  }

  submit(){

  }

  change(index,e){
    let array = this.state.value;
    array[index] = e.target.checked;
    this.setState({
      value:array
    })
  }

  render() {
    console.log(this.state.value)
    return (
      <div>
        <form onSubmit={this.props.submit}>
          1.这是一道多选题：
          <ul>
            <li><label>A 这是第一个选项<input type='checkBox' value="A" onChange={this.change.bind(this,0)} checked={this.state.value[0]}/></label></li>
            <li><label>B 这是第二个选项<input type='checkBox' value="B" onChange={this.change.bind(this,1)} checked={this.state.value[1]}/></label></li>
            <li><label>C 这是第三个选项<input type='checkBox' value="C" onChange={this.change.bind(this,2)} checked={this.state.value[2]}/></label></li>
            <li><label>D 这是第四个选项<input type='checkBox' value="D" onChange={this.change.bind(this,3)} checked={this.state.value[3]}/></label></li>
          </ul>
          <button type="submit">提交答案</button>
        </form>

      </div>
    )
  }
}