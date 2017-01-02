import React, {Component} from 'react';
import '../../style/navigation.css';
export default class SelectionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'selectionList '+this.props.classTest} onMouseOver={this.props.focus} >
        {this.props.text}
      </div>
    )
  }
}