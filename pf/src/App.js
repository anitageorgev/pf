import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import NavBar from './SideNav.jsx';
import Test from './Test.jsx';
import NavBarBootstrap from './NavBarBootstrap.jsx';

import { iosHeartOutline } from 'react-icons-kit/ionicons/iosHeartOutline'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      view:'test'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">finder</h1>
        </header>
        {/*<NavBar/>  */}
        <NavBarBootstrap/>
        <Test />  
      </div>     
    );
  }  
}



export default App;
