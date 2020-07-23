import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Provider as AlertProvider, positions, transitions} from 'react-alert';
import store from './redux/store';
import App from './App';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('app')
);
