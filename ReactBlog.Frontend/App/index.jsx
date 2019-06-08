import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './Containers/app.jsx';
import blogReducer from './Containers/Blog/blogReducer.jsx';
import commentListReducer from './Containers/CommentList/commentListReducer.jsx';

const rootReducer = combineReducers({ blogReducer, commentListReducer });

function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);