import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap/lib';

const Hp = (props) => {
  return (
    <div className="container">
      <h1>Prototypes</h1>
      <ListGroup>
      {props.versions.reverse().map((object, ind) => {
        return (
          <ListGroupItem
            key={ind}
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
Hp.propTypes = {versions: React.PropTypes.array};

export default Hp;
