import React from 'react';
import './App.css';
import Navigation from './components/layout/Navigation';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Notifications from './components/dashboard/Notifications';

import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container maxWidth="md">
        <br/>
        <Grid
          container
          spacing={0}
          // justify="center"
          direction="row"
          style={{ minHeight: '100vh' }}
        >  
          <Grid item xs={12} md={6} >
            <Dashboard/>
          </Grid>    
          <Grid item sm={1} >
          </Grid> 
          <Grid item xs={12} sm >
            <Notifications/>
          </Grid>     

        </Grid> 
      </Container>
    </div>
  );
}

export default App;
