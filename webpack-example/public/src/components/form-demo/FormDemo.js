import React, {Component} from 'react';

export default class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:[],
      display:false
    }
  }

  handleChange(e) {
    let array = Array.from(e.target.options);
    //吧类数组变成数组
    array = array.filter((item)=>{
      return item.selected
    }).map(item=>{
      return item.value
    });

    this.setState({
      value:array
    })

  }



  render() {
    return (
      <div>
        <select  multiple='true'
                 value={this.state.value}
                 onChange={this.handleChange.bind(this)}
                 ref={(ref)=>{this.select= ref}}
        >
          <option value="A" >A  hahhhhhhhhhh</option>
          <option value="B" >B  hahhhhhhhhhh</option>
          <option value="C" >C  hahhhhhhhhhh</option>
          <option value="D" >D  hahhhhhhhhhh</option>
        </select>
        <input type="button" onClick={()=>{
          this.setState({
            display:!this.state.display
          })
        }} value="答案"/>
        <ul style={{display:(this.state.display?'block':'none')}}>
          {
            this.state.value.map((item,index)=>{
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}