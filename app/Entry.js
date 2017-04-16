import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import IngestContainer from './containers/IngestContainer.js';
import SessionContainer from './containers/SessionContainer.js';
import SignUpView from './components/signup/SignUpView.js';

import NavBar from './components/NavBar.js';

export default class Entry extends React.Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="pageOne"
                        component={ SessionContainer }
                        initial={ "true" }
                        title="Home"
                        NavBar={ NavBar }
                    />
                    <Scene
                        key="pageTwo"
                        component={ IngestContainer }
                        title="Ingest"
                        NavBar={ NavBar }
                    />
                    <Scene
                        key="pageThree"
                        component={ SessionContainer }
                        title="Digest"
                        NavBar={ NavBar }
                    />
                    <Scene
                        key="pageFour"
                        component={ SessionContainer }
                        title="Digest"
                        NavBar={ NavBar }
                    />
                </Scene>
            </Router>
        );
    }
}

