import React from 'react';
import {
  Glyphicon,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap/lib';

export const Nc = (props) => {
  return (
    <div style={{position: 'relative'}}>
      {props.children}
    </div>
  );
};

export default (props) => {
  return (
    <div style={{position: 'absolute', marginLeft: -10, marginTop: -10, zIndex: 1}}>
      <OverlayTrigger
        overlay={
          <Popover>
            {props.children}
          </Popover>
        }>
        <Glyphicon style={{color: 'red'}} glyph="record"/>
      </OverlayTrigger>
    </div>
  );
};
