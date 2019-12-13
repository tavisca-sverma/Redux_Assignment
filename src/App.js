import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import UserForm from './containers/UserForm';
import StateDisplay from './components/StateDisplay';


function App() {
  return (

    <div className="App">

     <div className="UserForm" >
      
       <h3>User Details</h3>

        <UserForm/>

        <button >Submit</button>

     </div>

      <StateDisplay identifier={"First Name"}/>
      <StateDisplay identifier={"Last Name"}/>
    </div>
  );
}

export default App;
