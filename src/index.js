import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Store/Reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';

import { loadList } from './Store/Actions/actions';
import rootSaga from './Store/Sagas/saga';

import { BrowserRouter } from 'react-router-dom';

import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { reduxFirestore } from 'redux-firestore';
import { firebaseConfig } from './Constants/firebaseConfig';

const reduxFirebase = {
  userProfile: 'users',
  enableLogging: 'false'
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];

const store = createStore(
  rootReducer,
  compose(
    reactReduxFirebase(firebase, reduxFirebase),
    reduxFirestore(firebase),
    applyMiddleware(...middleware)
));

sagaMiddleware.run(rootSaga);

store.dispatch(loadList());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
