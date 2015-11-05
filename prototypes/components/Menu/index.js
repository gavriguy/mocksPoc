import React from 'react';
import qs from 'qs';
import {
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
export default Menu;
