import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './Routes';

import './index.css';

const basenameDomain = process.env.REACT_APP_BASENAME_DOMAIN;

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter basename={ basenameDomain }>
			<Routes />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);

