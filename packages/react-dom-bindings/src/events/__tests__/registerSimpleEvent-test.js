'use strict';

import { JSDOM } from 'jsdom';
import { createRoot } from 'react-dom';
import { registerSimpleEvents } from '../DOMEventProperties';

test('dummy test', () => {
    registerSimpleEvents();    
});
