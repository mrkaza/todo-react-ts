import './index.css';

import { persistedReducer } from 'modules/redux';
import { Router } from 'modules/router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
