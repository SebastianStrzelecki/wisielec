import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import Wisielec from './Wisielec';



class App extends Component {
  

  render() {
    
    return (
        <Router>
        <div>
        <div className="navbar">
          <ul className="navbar-nav"> 
            <li className="navbar-item">
              <Link className="navbar-link" to="/wisielec/easy" refresh="true">Easy</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/wisielec/medium" refresh="true">Medium</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/wisielec/hard" refresh="true">Hard</Link>
            </li>
          </ul>
        </div>
        <Route path="/wisielec/:id" component={Wisielec} refresh="true"/>
       </div>
      </Router>
    );
  }
}

export default App;
