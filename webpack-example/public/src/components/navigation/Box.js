import React, {Component} from 'react';
import '../../style/navigation.css';

export default class Box extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.box.addEventListener('webkitAnimationEnd', this.props.stop, false);
  }

  render() {
    let style = {
      left: `${this.props.focus*20}%`
    };
    return (
      <div ref={(ref)=>{
        this.box = ref
      }} className={'box '+(this.props.over?'animated shake':'')} style={style}>
        {this.props.text}
      </div>
    )
  }
}