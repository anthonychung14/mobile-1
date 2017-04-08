import 'rxjs';

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
import Entry from './app/Entry.js'

const store = configureStore();

export default class App extends React.Component {
	render() {
		return (
            <Provider store={ store }>
                <Entry />
            </Provider>
		);
	}
}

