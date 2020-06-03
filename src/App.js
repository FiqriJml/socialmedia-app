import React from 'react';
import './App.css';
import Navigation from './components/layout/Navigation';
import Container from '@material-ui/core/Container';
import Story from './components/story/Story';
import Grid from '@material-ui/core/Grid';
import Notifications from './components/dashboard/Notifications';
import CreateStory from './components/story/CreateStory';

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
            <CreateStory/>
            <Story/>
            <Story/>
          </Grid>    
          <Grid item sm={1} xs={0} >
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
