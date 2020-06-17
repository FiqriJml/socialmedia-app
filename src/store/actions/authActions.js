export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        })
    } 
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then( () =>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                jenisKelamin: newUser.jenisKelamin,
                tanggalLahir: newUser.tanggalLahir
            }).then(() =>{
                console.log('user doc kebuat');
            }).catch((err) => {
                console.log('gagal: ',err);
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err});
        })
    }
}