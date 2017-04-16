// @flow
import { connect } from 'react-redux';

import Session from '../components/Session.js';

import {

} from '../actions';

import {
    createSession
} from '../epics/sessionEpic';

import {


} from '../selectors';

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {
    createSession
})(Session);
