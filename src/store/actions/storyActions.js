export const createStory = (story) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('stories').add({
            ...story,
            userFirstName: 'Fiqri',
            userLastName: 'Jamal',
            userId: 12345,
            createdAt: new Date()
        }).then(() =>{
            dispatch({type: 'CREATE_STORY', story});
        }).catch((err) => {
            dispatch({type: 'CREATE_STORY_ERROR', err});
        })
    }
}