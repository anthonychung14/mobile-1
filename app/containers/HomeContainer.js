// @flow
import { connect } from 'react-redux';

import Home from '../components/Home.js';

import {
    increment,
    interval
} from '../actions';

import {
} from '../selectors';

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
    increment,
    interval
})(Home);
