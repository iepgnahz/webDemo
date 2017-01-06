import React, {Component,PropTypes} from 'react';

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: this.props.defaultValue
    }
  }

  handleChange(e){
    if(this.props.onChange){
      this.props.onChange(e);
    }

    this.setState({
      value:e.target.value
    })

  }

  render() {
    let value = this.props.value || this.state.value; //假装你是一个非受控组件
    return (
      <div>
        {React.Children.map(this.props.children,(child)=>{
          return (
            <div>
              <input type="radio"
                     name={this.props.name}
                     value={child.props.value}
                     checked={child.props.value === value}
                     onChange={this.handleChange.bind(this)}

              />
              {child.props.children}
            </div>
          )
        })}
      </div>
    )
  }
}

Radio.propTypes={
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func
};