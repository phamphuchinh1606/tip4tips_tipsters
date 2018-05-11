import React, { Component } from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from './Pages/Auth/Login.Page';
import Layout from './Pages/Layouts/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout/>
      </BrowserRouter>
    );
  }
}

export default App;
