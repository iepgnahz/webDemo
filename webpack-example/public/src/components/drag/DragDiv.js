import React, {Component} from 'react';
import '../../style/drag-demo.css';

export default class DragDiv extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.addEventListener()
  }

  render() {
    return (
      <div className={'drag'}>
        drag me
      </div>
    )
  }
}