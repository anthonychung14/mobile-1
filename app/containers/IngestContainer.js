// @flow
import { connect } from 'react-redux';

import Ingest from '../components/Ingest.js';

import {
    addData,
} from '../actions';

import {
} from '../selectors';

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
    addData,
})(Ingest);
