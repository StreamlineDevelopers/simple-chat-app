import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';

// components
import LoginContainer from './pages/login/LoginContainer.js';
import RegisterContainer from './pages/register/RegisterContainer.js';
import DashboardContainer from './pages/dashboard/DashboardContainer.js';
import ProfileContainer from './pages/profile/ProfileContainer.js';
import ChatRoomContainer from './pages/chatRoom/ChatRoomContainer.js';
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
  if(pathname==='/profile' && !isAuthenticated) {
    history.push('/');
  }
  if(pathname==='/dashboard/chatroom' && !isAuthenticated) {
    history.push('/');
  }

  return (
    <div className="body">
      <Route exact path='/' component={LoginContainer}/>
      <Route exact path='/register' component={RegisterContainer}/>
      <Route exact path='/dashboard' component={DashboardContainer}/>
      <Route exact path='/profile' component={ProfileContainer}/>
      <Route exact path='/dashboard/chatroom' component={ChatRoomContainer}/>
    </div>
  );
};

const App = () =>  {
  return (
    <AppState>
      <Router basename={process.env.PUBLIC_URL}>
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
