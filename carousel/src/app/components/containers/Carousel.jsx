import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Carousel from '../organisms/Carousel';
import {
  loadingSelector,
  scoreSelector,
  minScoreSelector,
  maxScoreSelector,
} from '../../../store/creditReport/selectors';
import { getCreditReportRequest } from '../../../store/creditReport/actions';

export const stateToProps = {
  loading: loadingSelector,
  score: scoreSelector,
  minScore: minScoreSelector,
  maxScore: maxScoreSelector,
};

export const mapStateToProps = createStructuredSelector(stateToProps);

export const mapDispatchToProps = dispatch => ({
  getCreditReport: () => { dispatch(getCreditReportRequest()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
