// @flow
import { connect } from 'react-redux';

import Test from '../components/Test.js';

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
})(Test);
