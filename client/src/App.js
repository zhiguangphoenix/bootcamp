import React, { Component } from 'react';
import './App.scss'
import TopBar from 'components/TopBar.js'
import Talk from 'src/pages/talk/App.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="topbar-wrapper">
          <TopBar />
        </div>
        <div className="main-wrapper">
          <Talk />
        </div>
      </div>
    );
  }
}

export default App;
