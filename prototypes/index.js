import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';
import PageList from './components/PageList';
import version from '../version';
import {ComponentStateWrapper} from './components/Menu';

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: ComponentStateWrapper(PageList) },
  childRoutes: [{
    childRoutes: version().routes.map((route) => {
      route.component = ComponentStateWrapper(
        route.component,
        route.component.fixtures
      );
      return route;
    }),
  }],
}];

ReactDom.render(
  <Router routes={routes}/>,
  document.getElementById('app')
);
