import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../style/flash.css';
export default class FlashDiv extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:['hello', 'world', 'click', 'me']
    }
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  handleClick(){
    let array = [...this.state.items,'write some words']
    this.setState({
      items: array
    })

  }


  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} className="div" onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>增加div</button>
        <ReactCSSTransitionGroup transitionName={'divTransition'} transitionEnterTimeout={1200} transitionLeaveTimeout={1200}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}