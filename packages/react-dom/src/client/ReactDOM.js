'use strict';

import { createRoot as createRootImpl } from './ReactDOMRoot';

function createRoot(container) {
  console.log('createRoot is called.');
  createRootImpl(container);
}

export { createRoot };
