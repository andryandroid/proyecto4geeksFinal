import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import Layout from './js/Layout';

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
