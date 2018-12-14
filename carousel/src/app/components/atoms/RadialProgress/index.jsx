import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bounceIn from 'eases/bounce-out';

import bemHelper from '../../../utils/bem';

import './index.scss';

const cn = bemHelper({ block: 'radial-progress' });

const getFillStyle = (increment, prev, progress) => {
  const max = -219.99078369140625;
  const target = prev + ((progress - prev) * bounceIn(increment));
  return { strokeDashoffset: ((100 - target) / 100) * max };
};

class RadialProgress extends Component {
  state = {
    prev: 0,
    i: 0,
  }

  timerId = undefined;

  componentDidUpdate({ progress: oldProgress }) {
    const { progress } = this.props;

    if (oldProgress !== progress) {
      this.startAnim();
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  startAnim() {
    const animationTime = 2000;
    const delay = 10;

    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.setState({ i: 0 });
    this.timerId = setInterval(() => {
      const { i } = this.state;
      const inc = (delay / animationTime);
      if (i + inc >= 1) {
        this.setState({ i: 1 });
        clearInterval(this.timerId);
      } else {
        this.setState({ i: i + inc });
      }
    }, delay);
  }

  render() {
    const { progress } = this.props;
    const { prev, i } = this.state;
    return (
      <svg className={cn(null, 'main')} x="0px" y="0px" viewBox="0 0 80 80">
        <path
          className={cn('fill')}
          d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
          style={getFillStyle(i, prev, progress)}
        />
      </svg>
    );
  }
}

RadialProgress.defaultProps = {
  progress: 0,
};

RadialProgress.propTypes = {
  progress: PropTypes.number,
};

export default RadialProgress;
