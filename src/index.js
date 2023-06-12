import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from './services/api';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ApiProvider api={api}>
          <App />
        </ApiProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
