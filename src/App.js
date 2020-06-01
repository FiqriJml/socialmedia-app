import React from 'react';
import './App.css';
import Navigation from './components/layout/Navigation';
import Container from '@material-ui/core/Container';
import Story from './components/story/Story';
import Grid from '@material-ui/core/Grid';
import Notifications from './components/dashboard/Notifications';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container >
        <br/>
        <Grid
          container
          spacing={0}
          // justify="center"
          direction="row"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={1} >
          </Grid>    
          <Grid item xs={6} >
            <Story/>
          </Grid>    
          <Grid item xs={1} >
          </Grid> 
          <Grid item xs={3} >
            <Notifications/>
          </Grid>     

        </Grid> 
      </Container>
    </div>
  );
}

export default App;
