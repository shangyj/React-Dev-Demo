import React, { Component } from 'react';
import './index.less';

class flexpage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="flex-container">

        <div className="first-item">
          <span className="circle"></span>
        </div>

        <div className="second-item">
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <div className="third-item">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <div className="fourth-item">
          <div className="column">
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <div className="column">
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>

        <div className="fifth-item">
          <div className="column">
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <div className="column">
            <span className="circle"></span>
          </div>
          <div className="column">
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>

        <div className="sixth-item">
          <div className="column">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <div className="column">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
      </div>

    );
  }

}
export default flexpage;
