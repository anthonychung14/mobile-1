import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeContainer from './containers/HomeContainer.js';
import IngestContainer from './containers/IngestContainer.js';
import DigestContainer from './containers/DigestContainer.js';
import TestContainer from './containers/TestContainer.js';
import LoginContainer from './containers/LoginContainer.js';

import NavBar from './components/NavBar.js';

export default class Entry extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="pageOne"
                        component={ HomeContainer }
                        title="Home"
                        NavBar={ NavBar }
                    />
                    <Scene
                        key="pageTwo"
                        initial={ "true" }
                        component={ IngestContainer }
                        title="Ingest"
                        NavBar={ NavBar }
                    />
                    <Scene
                        key="pageThree"
                        component={ DigestContainer }
                        title="Digest"
                        NavBar={ NavBar }
                    />
                    <Scene
                        key="pageFour"
                        component={ TestContainer }
                        title="Digest"
                        NavBar={ NavBar }
                    />
                </Scene>
            </Router>
        );
    }
}

