import React from 'react';
import { Component, Fragment } from 'react';
import Story from '../story/Story';
import CreateStory from '../story/CreateStory';

import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <CreateStory/>
                <Story/>
                <Story/>
                <Story/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.story.stories,
    }
}

export default connect(mapStateToProps)(Dashboard);