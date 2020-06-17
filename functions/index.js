const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, ini cuma percobaan database function!");
});

const createNotification = ( notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
})

exports.storyCreated = functions.firestore
    .document('stories/{stroryId}')
    .onCreate( doc => {
        const story = doc.data();
        const notification = {
            content: 'Added a new story',
            user: `${story.userFirstName} ${story.userLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        }
        return createNotification(notification);
})

exports.userRegistered = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'has been register as user',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        }
        return createNotification(notification);
    })
})