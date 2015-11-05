import React from 'react';
import Menu from '../Menu';

const App = (props) => {
  return (
    <div>
      {props.children}
      <Menu header="Menu"/>
    </div>
  );
};
App.propTypes = { children: React.PropTypes.element.isRequired };

export default App;
