import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore , combineReducers , compose , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import user from './store/reducers/user';
import AppBootstrap from './AppBootstrap'

const composeEnhancers = 
process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
: null || compose;

const rootReducer = combineReducers({
    user    
});
const store = createStore( rootReducer , composeEnhancers(applyMiddleware(thunk)) );

let appBootstrap = new AppBootstrap(store);

const app = (
    <BrowserRouter>
        <Provider store={store}><App /></Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
