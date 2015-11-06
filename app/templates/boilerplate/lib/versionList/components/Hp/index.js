import accessKey from 'cwd://accessKey.json';
import Login from 'cwd://lib/prototypes/components/Login'

import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap/lib';

let Contents = (props) => {
  if (window.sessionStorage.pa !== accessKey.accessKey) {
    return <Login/>
  } else {
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
  }
};

const Hp = (props) => {
  return (<div>{Contents(props)}</div>)
};
Hp.propTypes = {versions: React.PropTypes.array};

export default Hp;
