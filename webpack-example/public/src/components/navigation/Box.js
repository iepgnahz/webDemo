import React, {Component} from 'react';
import '../../style/navigation.css';

export default class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      left: `${this.props.focus*20}%`
    };
    return (
      <div className={'box '+this.props.classTest} style={style} >
        {this.props.text}
      </div>
    )
  }
}