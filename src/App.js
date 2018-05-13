import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './Reducers/index';

import Layout from './Pages/Layouts/Layout';
import RootLayout from './Pages/Layouts/RootLayout';

import createSagaMiddleware from 'redux-saga';
import RootSaga from './Sagas/RootSaga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware));

class App extends Component {
  render() {
    return (

      <Provider store={store}>
          <BrowserRouter>
            <RootLayout />
          </BrowserRouter>
          
      </Provider>

    );
  }
}

sagaMiddleware.run(RootSaga);
export default App;
