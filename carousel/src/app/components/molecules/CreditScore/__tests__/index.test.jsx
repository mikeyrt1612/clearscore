import React from 'react';
import { shallow } from 'enzyme';

import CreditScore from '..';

describe('<CreditScore />', () => {
  it('should display the correct score', () => {
    const wrapper = shallow(<CreditScore score={123} maxScore={999} />);
    expect(wrapper.find('.credit-score__score')).toHaveText('123');
  });

  it('should display the correct maximum score', () => {
    const wrapper = shallow(<CreditScore score={123} maxScore={999} />);
    expect(wrapper.find('.credit-score__max-score')).toHaveText('out of 999');
  });
});
