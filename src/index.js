import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducer/reducer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

let reducer;
reducer = combineReducers({
    ...reducers
})

let store;
store = createStore(
    reducer
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,document.getElementById('root')
);
