import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';

// components
import LoginContainer from './pages/login/LoginContainer.js';
import RegisterContainer from './pages/register/RegisterContainer.js';
import DashboardContainer from './pages/dashboard/DashboardContainer.js';
import ProfileContainer from './pages/profile/ProfileContainer.js';
import Navbar from './components/navbar/NavbarContainer.js';

// context api
import AppState from './context/AppState.js';

const RenderRoute = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  let isAuthenticated = !!localStorage.jwt_token;

  if(pathname==='/dashboard' && !isAuthenticated) {
    history.push('/');
  }

  return (
    <>
      <Route exact path='/' component={LoginContainer}/>
      <Route path='/register' component={RegisterContainer}/>
      <Route path='/dashboard' component={DashboardContainer}/>
      <Route path='/profile' component={ProfileContainer}/>
      <Route path='/chatroom' component={ProfileContainer}/>
    </>
  );
};

const App = () =>  {
  return (
    <AppState>
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
               <RenderRoute />
            </Switch>
        </div>
      </Router>
    </AppState>
  );
}

export default App;
