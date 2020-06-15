import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider, useSelector} from 'react-redux';

import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import firebase, {fbConfig} from "./config/fbConfig";

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig)
  )
);

const config = {
  userProfile: 'users', //where profile is stored on db
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: 'sessions'
}

// pakai connect
// const mapStateToProps = (state) => ({
//   authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
// });
// const WaitTillAuth = connect(mapStateToProps)(({ authIsLoaded }) => {
//   if (!authIsLoaded) return <div>splash screen...</div>;
//   return (
//     <App/>
//   );
// });

// pakai useSelector atau Hooks
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {/* <WaitTillAuth/> */}
      <AuthIsLoaded><App /></AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
