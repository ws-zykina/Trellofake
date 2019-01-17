import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
serviceWorker.unregister();
