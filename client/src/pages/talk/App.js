import React, { Component } from 'react';
import './App.scss'
import Aside from './aside/Aside'
import Content from './content/Content'
// import _ from 'lodash'

class Talk extends Component {

  render() {
    return (
      <div className="talk-wrapper">
        <div className="content-wrapper">
          <Content />
        </div>
        <div className="aside-wrapper">
          <Aside />
        </div>
      </div>
    )
  }
}

export default Talk;