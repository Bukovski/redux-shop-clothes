import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from './store/store';
import Routes from './Routes';

import './index.css';


const basenameDomain = process.env.REACT_APP_BASENAME_DOMAIN;

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter basename={ basenameDomain }>
			<PersistGate persistor={ persistor }>
				<Routes />
			</PersistGate>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);
