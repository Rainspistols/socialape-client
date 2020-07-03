import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import home from './pages/home.js';
import login from './pages/login.js';
import signup from './pages/signup.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar /> 
        <div className='container'>
          <Switch>
            <Route path='/' exact component={home} />
            <Route path='/login' exact component={login} />
            <Route path='/signup' exact component={signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
