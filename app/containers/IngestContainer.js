// @flow
import { connect } from 'react-redux';

import Ingest from '../components/Ingest.js';

import {
    addItem,
} from '../actions';

import {
} from '../selectors';

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
    addItem,
})(Ingest);
