import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// App components:
import App from './App';
import List from './List';
import Footer from './Footer';

// The main application component:
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<List />, document.querySelector('#content'));
ReactDOM.render(<Footer />, document.querySelector("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
