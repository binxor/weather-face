import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import initializeStore from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={initializeStore({})}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);