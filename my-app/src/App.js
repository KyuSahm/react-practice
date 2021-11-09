import React, { Component, Fragment } from 'react';
import './App.css'

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '22px'
    };

    return (
      <Fragment>
        <div style={style}>
          안녕하세요!!
        </div>
        <div className="App">
          리액트
        </div>
      </Fragment>
    );
  }
}

export default App;