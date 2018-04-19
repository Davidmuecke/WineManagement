import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * insert App component into root html element
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
