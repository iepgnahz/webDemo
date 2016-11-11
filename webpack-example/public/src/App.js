import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header'
import './style/index.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('App')
);