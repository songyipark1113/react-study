/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Let's develop management system!</h2>
      </header>
    </div>
  );
}

export default App;*/

import React,{Component} from 'react';
import Customer from './components/Customer'
import './App.css';

class App extends Component{
  render(){
    return(
      <Customer/>
    );
  }
}

export default App;
