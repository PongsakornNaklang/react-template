import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalVar } from './context/global_var';
import app_config from './config/app_config';

document.title = app_config.NAME

ReactDOM.render(
  <GlobalVar>
      <App />
  </GlobalVar>
  ,
  document.getElementById('root')
);
