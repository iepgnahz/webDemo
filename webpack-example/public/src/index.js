import React ,{Component} from 'react';
import {render} from 'react-dom';
import Search from './components/Real-time-search/Search';
import Navigation from './components/navigation/Navigation';
import Demo from './components/Demo';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
import SelectionQuestion from './components/select-question/index';
import MyApp from './components/react-dnd/MyApp';
import DragDiv from './components/drag/DragDiv';
import FormDemo from './components/form-demo/FormDemo';
class App extends Component{
  render(){
    return (

      <Router history={browserHistory} >
        <Route path='navigation' component={Navigation}/>
        <Route path='search' component={Search}/>
        <Route path='demo' component={Demo}/>
        <Route path='selectionQuestion' component={SelectionQuestion}/>
        <Route path="drag" component={MyApp} />
        <Route path="dragDiv" component={DragDiv} />
        <Route path="FormDemo" component={FormDemo} />
      </Router>

    )
  }
}
render(<App />,document.getElementById('App'));
