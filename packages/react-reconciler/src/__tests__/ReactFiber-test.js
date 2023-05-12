'use strict';

const { JSDOM } = require('jsdom');
const {
  createContainer,
} = require('react-reconciler/src/ReactFiberReconciler');

test('Dummy FiberRootNode', () => {
  const dom = new JSDOM(
    '<!doctype html><html><body><div id="root"></div></body></html>'
  );
  global.document = dom.window.document;

  const rootContainer = document.getElementById('root');
  const root = createContainer(rootContainer);
  console.log(root);
});
