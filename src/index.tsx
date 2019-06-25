import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HomePage } from './HomePage';

ReactDOM.render(
    <HomePage compiler="Typescript" framework="React"/>,
    document.getElementById('app'));