'use strict';

import { JSDOM } from 'jsdom';
import { createContainer } from 'react-reconciler/src/ReactFiberReconciler';
import { ConcurrentRoot } from '../ReactRootTags';

test('Dummy FiberRootNode', () => {
  const dom = new JSDOM(
    '<!doctype html><html><body><div id="root"></div></body></html>'
  );
  global.document = dom.window.document;

  const rootContainer = document.getElementById('root');
  const root = createContainer(rootContainer, ConcurrentRoot);
});
