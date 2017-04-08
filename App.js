import 'rxjs';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';

import HomeContainer from './app/containers/HomeContainer.js';

const store = configureStore();

export default class App extends React.Component {
	render() {
		return (
            <Provider store={ store }>
                <HomeContainer />
            </Provider>
		);
	}
}
