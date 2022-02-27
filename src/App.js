import Navbar from './NavBar';
import NumberEntry from './NumberEntry';
import NumberButtons from './NumberButtons';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( <div className="App">
    <Navbar />
    <NumberEntry />
    <NumberButtons />

  </div> );
  }
}

export default App;
