import React, { Component } from 'react';
import _ from 'lodash'
import './TopBar.scss'

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStatus: 'blur',
    }
  }

  switchInputStatus(status) {
    let statusToSet = '';
    if (_.isString(status) && status.length > 0) {
      statusToSet = status;
    }

    this.setState({
      inputStatus: statusToSet
    });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.keyCode === 13) {
      console.log(e.target.value);
    }
  }

  render() {
    let inputPlaceHolder = '请输入...';
    let inputClass = this.state.inputStatus === 'focus'
      ? 'search-input focus'
      : 'search-input blur';

    return (
      <header className="top-bar">
        <div className="logo">
          <img />
        </div> 
        <div className="search">
          <input 
            placeholder={inputPlaceHolder} 
            className={inputClass}
            onFocus={() => this.switchInputStatus('focus')}
            onBlur={() => this.switchInputStatus('blur')}
            onKeyDown={this.handleKeyDown.bind(this)}/>
        </div>
        <div className="tabs">
        </div>
      </header>
    )
  }
}

export default TopBar;