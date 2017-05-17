import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './App';
import './index.css';


ReactDOM.render(
    <MuiThemeProvider>
      <Router>
          <App/>
      </Router>
    </MuiThemeProvider>,
  document.getElementById('root')
);
