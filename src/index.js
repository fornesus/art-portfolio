import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import Header from './Header';
import App from './App';
import Footer from './Footer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<App />, document.querySelector('main'));
ReactDOM.render(<Footer />, document.querySelector('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
