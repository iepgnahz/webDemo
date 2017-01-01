import React, {Component} from 'react';

export default class TextList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container textList'>
        <span className="col-xs-3">{this.props.name}</span>
        <a className="col-xs-3" href={this.props.url}>{this.props.url}</a>
      </div>
    )
  }
}