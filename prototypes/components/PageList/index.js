import React from 'react';
import { Link } from 'react-router';
import version from '../../../version';
import {
  Badge,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap/lib';

export default () => {
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
