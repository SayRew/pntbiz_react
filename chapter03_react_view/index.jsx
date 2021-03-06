import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./src/Root";
import { hot } from 'react-hot-loader/root';

const Hot = hot(Root);

ReactDOM.render(<Hot/> , document.querySelector('#root'));