import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';
import PageList from './components/PageList';
import version from '../version';

import dotty from 'dotty';
// import map from 'lodash/collection/map';
import Menu from './components/Menu';

const getFixtureIndex = ({location}) => {
  const fixtureIndex = dotty.get(location, 'query.fixtureIndex');
  return Number(fixtureIndex ? fixtureIndex : 0);
};

const ComponentStateWrapper = (component, fixtures = [{label: 'default'}]) => {
  return (props) => {
    const componentWithFixture = component(fixtures[getFixtureIndex(props)]);
    return (
      <div>
        {componentWithFixture}
        <Menu
          fixtures={fixtures}
          location={props.location}
        />
      </div>
    );
  };
};

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: PageList },
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
