import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" data-target=".navbar-collapse" data-toggle="collapse" type="button">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Applicaster</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav" id="primary-navigation">
              <li className="active"><Link to={'apps'}>Apps</Link></li>
            </ul>
            <p className="navbar-text navbar-right">Hello Gabriel &nbsp;<a rel="nofollow" data-method="delete" href="/logout">Logout</a>&nbsp;</p>
          </div>
        </div>
      </nav>
    )
  }
})
