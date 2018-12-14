import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../../../utils/bem';

import RadialProgress from '../../atoms/RadialProgress';
import CreditScore from '../../molecules/CreditScore';

import './index.scss';

const cn = bemHelper({ block: 'carousel' });

class Carousel extends Component {
  componentDidMount() {
    const { getCreditReport } = this.props;
    getCreditReport();
  }

  render() {
    const {
      loading, score, minScore, maxScore,
    } = this.props;

    return (
      <Fragment>
        <div className={cn(null, 'main')}>
          <RadialProgress className={cn('progress')} progress={(score / (maxScore - minScore)) * 100} />
          {!loading
            && (
            <div className={cn('credit-score')}>
              <CreditScore score={score} maxScore={maxScore} />
            </div>
            )
          }
        </div>
        { /* TODO - Abstract out and make it resusable for */ }
        { /* elements that require a frosting effect. */}
        <div className={cn('frost')} />
      </Fragment>
    );
  }
}

Carousel.defaultProps = {
  loading: true,
  score: 0,
  minScore: 0,
  maxScore: 0,
  getCreditReport: () => {},
};

Carousel.propTypes = {
  loading: PropTypes.bool,
  score: PropTypes.number,
  minScore: PropTypes.number,
  maxScore: PropTypes.number,
  getCreditReport: PropTypes.func,
};

export default Carousel;
