import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
