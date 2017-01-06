import React, {Component} from 'react';
import Card from './Card'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
class MyApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card text="drag me"/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(MyApp);