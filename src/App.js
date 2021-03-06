import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import LoginContainer from './pages/login/LoginContainer.js';
import RegisterContainer from './pages/register/RegisterContainer.js';
import DashboardContainer from './pages/dashboard/DashboardContainer.js';
import Navbar from './components/navbar/NavbarContainer.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={LoginContainer}/>
        <Route path='/register' component={RegisterContainer}/>
        <Route path='/dashboard' component={DashboardContainer}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
