const initState = {
    stories: []
}
const storyReducer = (state= initState, action) => {
    switch(action.type) {
        case 'CREATE_STORY':
            console.log('create story', action.story);
            return state;
        case 'CREATE_STORY_ERROR':
            console.log('create story error', action.err);
            return state;
        case 'DELETE_STORY':
            console.log('story with id:',action.story.id,' deleted');
            return state;
        case 'DELETE_STORY_ERROR':
            console.log('delete story error:', action.err);
            return state;
        default:
            return state;
    }
}

export default storyReducer;