import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import DashboardPage from '..';

import Carousel from '../../../containers/Carousel';

describe('<DashboardPage />', () => {
  it('should have a Provider', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(Provider)).toExist();
  });

  it('should have a Carousel container', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(Carousel)).toExist();
  });
});
