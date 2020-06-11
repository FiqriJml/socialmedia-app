const initState = {
    stories: [
        {id: '1', userFirstName: 'Fiqri', userLastName: 'Jamal', content: 'My first Story huhuhu'},
        {id: '2', userFirstName: 'Fiqri', userLastName: 'Jamal', content: 'My second Story bla bla bla'},
        {id: '3', userFirstName: 'Rayasa', userLastName: 'kun', content: 'My first Story yeah'},
    ]
}
const storyReducer = (state= initState, action) => {
    switch(action.type) {
        case 'CREATE_STORY':
            console.log('create story', action.story);
            return state;
        case 'CREATE_STORY_ERROR':
            console.log('create story error', action.err);
            return state;
        default:
            return state;
    }
}

export default storyReducer;