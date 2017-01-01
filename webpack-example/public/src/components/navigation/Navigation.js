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
      text:'home'
    }
  }

  focus(){
    this.setState({

    })
  }

  render() {
    return (
      <div className='body'>
        <Box text={this.state.text} focus={this.state.focus}/>
        <ul>
          {
            textItems.map((list,index)=>(
              <li key={index}><SelectionList text={list} class={index === 0 ? 'firstItem' : ''} focus={()=>{
                this.setState({
                  focus:index,
                  text:list
                })
              }}/></li>))
          }
        </ul>
      </div>
    )
  }
}