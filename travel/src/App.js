import React from 'react';
import './App.css';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Login />        
      </div>
  );
}

export default App;

// <Login />
//         <React.Fragment>
//           <NavBar></NavBar>
//           <Products></Products>
//           <Company></Company>
//           <Help></Help>
//         </React.Fragment>

{/* <Router>
    <div className="App">
      <h2>Travel App</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
        <Route path="/" exact strict render={
          <h1>Welcome Home</h1>
        }>
        </Route>        
        <Route path="/Summary" exact strict render={
          <h1>Welcome Summary</h1>
        }>
        </Route>        
      </div>
      </Router> */}