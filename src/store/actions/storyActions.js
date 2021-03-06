export const createStory = (story) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('stories').add({
            ...story,
            userFirstName: profile.firstName,
            userLastName: profile.lastName,
            userId: userId,
            createdAt: new Date()
        }).then(() =>{
            dispatch({type: 'CREATE_STORY', story});
        }).catch((err) => {
            dispatch({type: 'CREATE_STORY_ERROR', err});
        })
    }
}

export const deleteStory = (story) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('stories').doc(story.id).delete()
        .then(()=> {
            dispatch({type: 'DELETE_STORY', story})
        }).catch(err => {
            dispatch({type: 'DELETE_STORY_ERROR', err})
        })
    }
}

export const updateStory = (story, storyId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('stories').doc(storyId)
        .update(story)
    }
}