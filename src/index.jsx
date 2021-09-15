import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Bulb from './Bulb';

const App = () => (
  <>
    <Bulb on={false}/>
    <Bulb on={true}/>
  </>
);

render(<App />, document.querySelector('#app'));
