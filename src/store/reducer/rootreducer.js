import authreducer from './authreducer'
import projectreducer from './projectreducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authreducer,
    project: projectreducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer