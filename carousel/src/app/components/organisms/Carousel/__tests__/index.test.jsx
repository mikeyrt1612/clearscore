import React from 'react';
import { shallow, mount } from 'enzyme';

import Carousel from '..';

import RadialProgress from '../../../atoms/RadialProgress';
import CreditScore from '../../../molecules/CreditScore';

describe('<Carousel />', () => {
  describe('Radial progress', () => {
    it('should pass the correct progress to the <RadialProgress />', () => {
      const wrapper = shallow(
        <Carousel score={30} minScore={200} maxScore={700} getCreditReport={() => {}} />,
      );
      expect(wrapper.find(RadialProgress)).toHaveProp('progress', 6);
    });
  });

  describe('Credit score', () => {
    it('should not show the credit score when loading', () => {
      const wrapper = shallow(<Carousel loading getCreditReport={() => {}} />);
      expect(wrapper.find(CreditScore)).not.toExist();
    });

    it('should show the credit score when finished loading', () => {
      const wrapper = shallow(<Carousel loading={false} getCreditReport={() => {}} />);
      expect(wrapper.find(CreditScore)).toExist();
    });
  });

  it('should update the credit report information on mount', () => {
    const getCreditReport = jest.fn();
    const wrapper = mount(
      <Carousel score={30} minScore={200} maxScore={700} getCreditReport={getCreditReport} />,
    );
    expect(getCreditReport).toHaveBeenCalled();
    wrapper.unmount();
  });

  // TODO - should be abstracted out into a seperate component with appropriate api.
  it('should have a frost effect', () => {
    const wrapper = shallow(<Carousel getCreditReport={() => {}} />);
    expect(wrapper.find('.carousel__frost')).toExist();
  });
});
