import React from 'react';
import { Link } from 'react-router';
import md5 from 'blueimp-md5';
import {
  Input,
  Button,
} from 'react-bootstrap/lib';

export default (props) => {
  const login = (event) => {
    window.sessionStorage.pa = md5(event.target.form[0].value);
    event.target.form[0].value = "";
    props.history.pushState(null, '/');
  };
  return (
    <div className="container" >
    <div style={{margin: 100}}>
      <form className="form-horizontal" >
        <Input
          type="password"
          placeholder="Insert Access Key"
          wrapperClassName="col-xs-4 col-md-offset-4"
          buttonAfter={<Button onClick={login}>Enter</Button>}
        />
      </form>
    </div>
    </div>
  );
};
