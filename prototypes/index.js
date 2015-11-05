import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';
import PageList from './components/PageList';
import version from '../version';

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: PageList },
  childRoutes: [{
    childRoutes: version().routes,
  }],
}];

ReactDom.render(
  <Router routes={routes}/>,
  document.getElementById('app')
);
