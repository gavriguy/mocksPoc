import React from 'react';
import ReactDom from 'react-dom';
import { Router, Link } from 'react-router';
import version from '../version';
import qs from 'qs';
import {
  ListGroup,
  ListGroupItem,
  Badge,
  DropdownButton,
  Glyphicon,
  MenuItem,
} from 'react-bootstrap/lib';

const Menu = (props) => {
  const {hp} = qs.parse(location.search.substring(1));
  return (
    <div style={{position: 'fixed', bottom: 0, right: 0}}>
      <DropdownButton
        id="menu"
        bsStyle="link"
        title={<Glyphicon glyph="option-vertical"/>}
        noCaret
        dropup
        pullRight={true}
      >
        <MenuItem header>{props.header}</MenuItem>
        <MenuItem href={decodeURIComponent(hp)}>All Versions</MenuItem>
        <MenuItem
          href={`${location.origin}${location.pathname}${location.search}`}
        >
            Page List
        </MenuItem>
      </DropdownButton>
    </div>
  );
};
Menu.propTypes = { header: React.PropTypes.string };

const App = (props) => {
  return (
    <div>
      {props.children}
      <Menu header="Menu"/>
    </div>
  );
};
App.propTypes = { children: React.PropTypes.element.isRequired };

const PageList = () => {
  return (
    <div className="container">
      <h3>Page List <Badge>{window.version}</Badge></h3>
      <ListGroup>
      {version().routes.map((route, ind) => {
        return (
          <ListGroupItem key={ind}>
            <Link
              to={route.path}
              style={{ color: '#444', textDecoration: 'none' }}
            >
              <h4>{route.label}</h4>
              <p>{route.description}</p>
            </Link>
          </ListGroupItem>
        );
      })}
      </ListGroup>
    </div>
  );
};

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
