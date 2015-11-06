import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';
import Hp from './components/Hp';

axios.get('versions.json')
.then((response) => {
  console.log(response);
  ReactDom.render(
    <Hp versions={response.data}/>,
    document.getElementById('app')
  );
})
.catch((response) => {
  console.log(response);
});
