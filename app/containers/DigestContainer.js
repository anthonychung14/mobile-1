// @flow
import { connect } from 'react-redux';

import Digest from '../components/swiper/Digest.js';

import {

} from '../actions';

import {
} from '../epics/sessionEpic';

import {
    getCardsForSession
} from '../selectors';

const mapStateToProps = (state) => ({
    cards: getCardsForSession(state)
});

export default connect(mapStateToProps, {
})(Digest);
