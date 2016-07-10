import 'babel-polyfill'

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { render } from 'react-dom'
import { fetchMsgs  } from './components/Action';
import rootReducer from './components/Reducer';

var s = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
    )
);

console.log(s);
console.log(s.getState());


s.dispatch(fetchMsgs(1)).then(() =>
  console.log(s.getState())
)
/*

render(
    <span>Hello World !!</span>,
    document.getElementById('app')
);
*/