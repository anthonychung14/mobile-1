// @flow
import { connect } from 'react-redux';

import Digest from '../components/swiper/Digest.js';

import {

} from '../actions';

import {
} from '../epics/sessionEpic';

import {


} from '../selectors';

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {
})(Digest);
