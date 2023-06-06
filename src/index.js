import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airLines  =(state = [], action) => {
    if (action.type ==="ADD") {
        return [...state, action.data]

    }
    return state;


};

/** TODO: Create store */
const storeInstance = createStore(
        combineReducers(
            {airLines}
        ),
        applyMiddleware(
            logger
        )
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>
);
