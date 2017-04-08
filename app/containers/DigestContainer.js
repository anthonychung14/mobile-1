// @flow
import { connect } from 'react-redux';

import Digest from '../components/Digest.js';

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
})(Digest);
