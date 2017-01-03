import React ,{Component} from 'react';
import {render} from 'react-dom';
import Search from './components/Real-time-search/Search';
import Navigation from './components/navigation/Navigation';
import Demo from './components/Demo';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
import SelectionQuestion from './components/select-question/index';

class App extends Component{
  render(){
    return (

      <Router history={browserHistory} >
        <Route path='navigation' component={Navigation}/>
        <Route path='search' component={Search}/>
        <Route path='demo' component={Demo}/>
        <Route path='selectionQuestion' component={SelectionQuestion}/>

      </Router>

    )
  }
}
render(<App />,document.getElementById('App'));
