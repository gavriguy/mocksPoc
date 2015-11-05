import React from 'react';
import { Link } from 'react-router';
import {
  Input,
  Button,
} from 'react-bootstrap/lib';

export default (props) => {
  const login = (event) => {
    window.sessionStorage.pa = event.target.form[0].value;
    event.target.form[0].value = "";
    props.history.pushState(null, '/');
  };
  return (
    <div className="container" >
    <div style={{margin: 100}}>
      <form className="form-horizontal" >
        <Input
          type="password"
          wrapperClassName="col-xs-4 col-md-offset-4"
          buttonAfter={<Button onClick={login}>Login</Button>}
        />
      </form>
    </div>
    </div>
  );
};
