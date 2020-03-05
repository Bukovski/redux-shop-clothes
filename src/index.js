import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './Routes';

import './index.css';


ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);
