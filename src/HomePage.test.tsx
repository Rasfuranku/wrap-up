'use strict';

import * as React from 'react';
import { HomePage } from './HomePage';
import * as renderer from 'react-test-renderer';

test('Test home page', () => {
    const component = renderer.create(
        <HomePage compiler="Typescript" framework="React"/>,
    );
    
    expect(component).toBeDefined();
})