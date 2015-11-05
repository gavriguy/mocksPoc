import React from 'react';

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};
App.propTypes = { children: React.PropTypes.element.isRequired };

export default App;
