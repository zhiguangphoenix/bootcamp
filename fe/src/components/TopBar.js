import React, { Component } from 'react';
import './TopBar.scss'

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTab: 'talk'    
    }
  }
  calculateTabItemClassName(tab) {
    return this.state.curTab === tab ? "talk tab-item active" : "talk tab-item";
  }
  handleTabClick(tab) {
    // this.setState({
    //   curTab: tab
    // })
    console.log(tab);
    
  }
  render() {
    this.handleTabClick('blog');
    return (
      <header className="top-bar">
        <div className="top-bar-inner">
          <div className="tabs">
            <div 
              className={this.calculateTabItemClassName('talk')}
              >
              {/* <img 
                src={talkLogo}
                className="logo" 
                alt="说说"/> */}
              <span className="text">说说</span>
            </div>
            <div 
              className={this.calculateTabItemClassName('blog')}
              >
              {/* <img 
                src="../assets/blog-logo.svg" 
                className="logo" 
                alt="文章"/> */}
              <span className="text">文章</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default TopBar;