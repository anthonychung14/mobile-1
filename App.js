import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';

import Home from './app/components/Home.js';

const store = configureStore();

export default class App extends React.Component {
	render() {
		return (
            <Provider store={ store }>
                <Home />
            </Provider>
		);
	}
}
