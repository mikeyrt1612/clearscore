import React from 'react';
import { shallow, mount } from 'enzyme';

import RadialProgress from '..';

jest.useFakeTimers();

describe('<RadialProgress />', () => {
  it('should not animate when progress prop hasn\'t changed (default 0)', () => {
    const wrapper = shallow(<RadialProgress progress={0} />);
    expect(wrapper).toHaveState('i', 0);
    wrapper.setProps({ progress: 0 });
    jest.advanceTimersByTime(100);
    expect(wrapper).toHaveState('i', 0);
  });

  it('should animate when progress prop changes to different value', () => {
    const wrapper = shallow(<RadialProgress progress={0} />);
    expect(wrapper).toHaveState('i', 0);
    wrapper.setProps({ progress: 85 });
    jest.advanceTimersByTime(100);
    expect(wrapper).not.toHaveState('i', 0);
  });

  it('should animate correctly upwards ↑↑↑ using the desired bounce animation', () => {
    const samples = [-219.9907, -163.4256, -53.1937, -84.0474, -49.4083, -32.9986];

    const wrapper = shallow(<RadialProgress progress={0} />);
    wrapper.setProps({ progress: 85 });

    samples.forEach((sample) => {
      const { strokeDashoffset } = wrapper.find('path').prop('style');
      expect(strokeDashoffset).toBeCloseTo(sample);
      jest.advanceTimersByTime(400);
      wrapper.update();
    });
  });

  it('should animate correctly upwards ↓↓↓ using the desired bounce animation', () => {
    const samples = [-219.9907, -206.6813, -180.7444, -188.0041, -179.8537, -175.9926];

    const wrapper = shallow(<RadialProgress progress={0} />);

    // animated it to a high value first
    wrapper.setProps({ progress: 85 });
    jest.advanceTimersByTime(4000);
    wrapper.update();

    wrapper.setProps({ progress: 20 });

    samples.forEach((sample) => {
      const { strokeDashoffset } = wrapper.find('path').prop('style');
      expect(strokeDashoffset).toBeCloseTo(sample);
      jest.advanceTimersByTime(400);
      wrapper.update();
    });
  });

  it('should stop the animation when unmounted', () => {
    const wrapper = mount(<RadialProgress progress={0} />);
    wrapper.setProps({ progress: 85 });
    wrapper.unmount();
    const spy = jest.spyOn(window, 'clearInterval');
    expect(spy).toHaveBeenCalled();
  });
});
