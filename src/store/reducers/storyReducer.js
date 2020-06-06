const initState = {
    stories: [
        {id: '1', userId: '1', content: 'My first Story huhuhu'},
        {id: '2', userId: '1', content: 'My second Story bla bla bla'},
        {id: '3', userId: '2', content: 'My first Story yeah'},
    ]
}
const storyReducer = (state= initState, action) => {
    return state;
}

export default storyReducer;