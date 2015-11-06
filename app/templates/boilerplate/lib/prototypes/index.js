import accessKey from '../../accessKey.json';
import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';
import PageList from './components/PageList';
import Login from './components/Login';
import version from '../../src';
import {ComponentStateWrapper} from './components/Menu';

function requireAuth(nextState, replaceState) {
  if (window.sessionStorage.pa !== accessKey.accessKey) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

const routes = [{
  path: '/',
  component: App,
  indexRoute: {
    component: ComponentStateWrapper(PageList),
    onEnter: requireAuth,
  },
  childRoutes: [{
    childRoutes: version().routes.map((route) => {
      route.component = ComponentStateWrapper(
        route.component,
        route.component.fixtures
      );
      route.onEnter = requireAuth;
      return route;
    }),
  },
    {path: 'login', component: Login},
  ],
}];

ReactDom.render(
  <Router routes={routes}/>,
  document.getElementById('app')
);
