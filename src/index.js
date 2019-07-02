import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore,applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootreducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbconfig from './config/fbconfig'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig, {useFirestoreForProfile:true, userProfile: 'users', attachAuthIsReady: true})
    )
  );

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
  );  
})

