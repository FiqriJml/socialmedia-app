import React from 'react';
import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignUp from './components/auth/SignUp';

import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
