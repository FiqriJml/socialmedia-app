export const createComment = (comment, story) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        const newData = { 
            comments: Object.assign([], story.comments) 
        };
        const newComment = {
            userId,
            username: `${profile.firstName} ${profile.lastName}`,
            content: comment.content,
            createdAt: new Date()
        }
        newData.comments.push(newComment);
        // console.log(newData);
        firestore.collection('stories').doc(story.id).update(newData)
    }
}