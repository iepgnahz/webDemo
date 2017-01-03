import React, {Component} from 'react';
import TextInput from './TextInput';
import TextList from './TextList';
var libraries = [

  { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
  { name: 'AngularJS', url: 'https://angularjs.org/'},
  { name: 'jQuery', url: 'http://jquery.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'React', url: 'http://facebook.github.io/react/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Mootools', url: 'http://mootools.net/'},
  { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'http://momentjs.com/'},
  { name: 'Express', url: 'http://expressjs.com/'},
  { name: 'Koa', url: 'http://koajs.com/'},

];
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchString: ''
    }
  }

  render() {

    return (
      <div className="container">
        <TextInput className={'col-xs-12'} onChange={(e)=>{
          this.setState({
            searchString: e.target.value.trim().toLowerCase()
          })
        }}/>
        <ul className={'col-xs-12 ulText'}>
        {
          libraries.filter(item=>{
            return item.name.toLowerCase().includes(this.state.searchString)
          }).map((item,index)=>{
            return <li key={index}>
              <TextList name={item.name} url={item.url}/>
            </li>
          })
        }
        </ul>
      </div>
    )
  }
}