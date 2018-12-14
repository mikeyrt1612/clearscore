import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import DocumentMeta from 'react-document-meta';
import PropTypes from 'prop-types';

import MainLayout from './components/layouts/MainLayout';
import DashboardPage from './components/pages/DashboardPage';
import NotFoundPage from './components/pages/NotFoundPage';

export const getRoutesConfig = () => [
  {
    name: 'dashboard',
    exact: true,
    path: '/',
    meta: {
      description: 'ClearScore : Assessment to mimic the dashboard',
      meta: {
        charSet: 'utf-8',
        name: {
          keywords: 'react,example',
        },
      },
      title: 'ClearScore Assessment - Dashboard',
    },
    label: 'Dashboard',
    component: DashboardPage,
  },
];

const MakeRoutes = () => (
  <MainLayout>
    <Switch>
      {getRoutesConfig().map(({ component: Component, meta, ...props }) => (
        <Route
          {...props}
          key={props.name}
          render={matchProps => (
            <><DocumentMeta {...meta} /><Component {...matchProps} /></>
          )}
        />
      ))}
      <Route title="Page Not Found" component={NotFoundPage} />
    </Switch>
  </MainLayout>
);

MakeRoutes.defaultProps = {
  name: 'default',
};

MakeRoutes.propTypes = {
  name: PropTypes.string,
};

export default MakeRoutes;
