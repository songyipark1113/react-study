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

export default App;
*/

import React,{Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
}

class App extends Component{
  render(){
    return(
      <Customer
       id={customer.id}
       image={customer.image}
       name={customer.name}
       birthday={customer.birthday}
       gender={customer.gender}
       job={customer.job}
      />
    );
  }
}

export default App;
