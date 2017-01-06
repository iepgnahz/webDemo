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
import CheckBoxDemo from './components/form-demo/CheckBoxDemo';
import ChangeEvent from './components/some-forms-with-one-change-handle/Forms';
import SelfForms from './components/self-form/SelfForms';
import ControlledSelfForms from './components/self-form/ControlledSelfForms';
import FlashDiv from './components/ComponentFlash/FlashDiv';
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
        <Route path="checkBoxDemo" component={CheckBoxDemo}/>
        <Route path='changeEvent' component={ChangeEvent}/>
        <Route path='selfForms' component={SelfForms}/>
        <Route path='controlledForm' component={ControlledSelfForms}/>
        <Route path='flashDiv' component={FlashDiv}/>
      </Router>

    )
  }
}
render(<App />,document.getElementById('App'));
