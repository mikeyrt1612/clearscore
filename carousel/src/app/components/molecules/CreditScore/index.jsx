import React from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../../../utils/bem';

import './index.scss';

const cn = bemHelper({ block: 'credit-score' });

const CreditScore = ({ score, maxScore }) => (
  <div className={cn(null, 'main')}>
    <div>Your credit score is</div>
    <div className={cn('score')}>
      {score}
    </div>
    <div className={cn('max-score')}>
      <span>out of </span>
      <b>{maxScore}</b>
    </div>
    <div className={cn('summary')}>Soaring high</div>
  </div>
);

CreditScore.defaultProps = {
  score: 0,
  maxScore: 0,
};

CreditScore.propTypes = {
  score: PropTypes.number,
  maxScore: PropTypes.number,
};

export default CreditScore;
