import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Root from './containers/root.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
