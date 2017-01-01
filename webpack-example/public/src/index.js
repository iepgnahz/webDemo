import React ,{Component} from 'react';
import {render} from 'react-dom';
import Search from './components/Real-time-earch/Search';
import Navigation from './components/navigation/Navigation';
import Demo from './components/Demo';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'

class App extends Component{
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='navigation' component={Navigation}/>
        <Route path='search' component={Search}/>
        <Route path='demo' component={Demo}/>
      </Router>
    )
  }
}
render(<App />,document.getElementById('App'));
