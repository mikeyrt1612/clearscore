import React from 'react';
import { Provider } from 'react-redux';

import Carousel from '../../containers/Carousel';
import configureStore from '../../../../store/configureStore';

import './index.scss';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Carousel />
  </Provider>
);
