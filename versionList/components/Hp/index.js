import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap/lib';


export default (props) => {
  return (
    <div className="container">
      <h1>Prototypes</h1>
      <ListGroup>
      {props.versions.reverse().map((object, ind) => {
        return (
          <ListGroupItem
            href={`${location.href}${object}?hp=${encodeURIComponent(location.href)}`}
          >
            Version {object}
          </ListGroupItem>
        );
      })}
      </ListGroup>
    </div>
  );
};
