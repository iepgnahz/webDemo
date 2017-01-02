import React, {Component} from 'react';
import SelectionList from './SelectionList';
import '../../style/navigation.css';
import Box from './Box';
const textItems = [
  'home',
  'service',
  'about',
  'concat us',
  '首页'
];

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state={
      focus:0,
      text:'home',
      over: false
    }
  }

  end(){
    console.log(
      '0000'
    );
    this.setState({
      over:false
    })
  }

  render() {
    console.log(this.state.over)
    return (
      <div className='body'>
        <Box text={this.state.text} focus={this.state.focus} over={this.state.over} stop={this.end.bind(this)}/>
        <ul>
          {
            textItems.map((list,index)=>(
              <li key={index}><SelectionList text={list} classTest={(index === 0 ? 'firstItem' : '') } focus={()=>{
                this.setState({
                  focus:index,
                  text:list,
                  over:true
                })
              }} /></li>))
          }
        </ul>
      </div>
    )
  }
}