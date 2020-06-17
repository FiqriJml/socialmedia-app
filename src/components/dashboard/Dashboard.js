import React from 'react';
import { Component, Fragment } from 'react';
import StoryList from '../story/StoryList';
import CreateStory from '../story/CreateStory';

import Navigation from '../layout/Navigation';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Notifications from './Notifications';
import { connect } from 'react-redux';

import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


class Dashboard extends Component {
    render() {
        const { stories, notifications } = this.props;
        console.log(this.props);
        return (
            <Fragment>
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
                    <StoryList stories={stories}/>
                </Grid>    
                <Grid item sm={1} >
                </Grid> 
                <Grid item xs={12} sm >
                    <Notifications notifications={notifications}/>
                </Grid>     
    
                </Grid> 
            </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        stories: state.firestore.ordered.stories,
        notifications: state.firestore.ordered.notifications,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'stories', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ]),
)(Dashboard);