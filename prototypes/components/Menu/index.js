import React from 'react';
import { Link } from 'react-router';

import qs from 'qs';
import {
  DropdownButton,
  Glyphicon,
  MenuItem,
} from 'react-bootstrap/lib';

import dotty from 'dotty';

const getFixtureIndex = ({location}) => {
  const fixtureIndex = dotty.get(location, 'query.fixtureIndex');
  return Number(fixtureIndex ? fixtureIndex : 0);
};

export const ComponentStateWrapper = (component, fixtures = [{label: 'default'}]) => {
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
        <MenuItem header>Menu</MenuItem>
        <MenuItem href={decodeURIComponent(hp)}>All Versions</MenuItem>
        <MenuItem
          href={`${location.origin}${location.pathname}${location.search}`}
        >
            Page List
        </MenuItem>
        <MenuItem header>States</MenuItem>
        {props.fixtures.map((fixture, ind) => {
          return (
            <MenuItem active={ind === getFixtureIndex(props)}>
              <Link
                to={props.location.pathname}
                query={{fixtureIndex: ind}}
              >
                {fixture.label}
              </Link>
            </MenuItem>
          );
        })}
      </DropdownButton>
    </div>
  );
};

Menu.propTypes = {
  header: React.PropTypes.string,
  location: React.PropTypes.object,
};
// Menu.defaultProps = {fixtures: [{label: 'default'}]};
export default Menu;
