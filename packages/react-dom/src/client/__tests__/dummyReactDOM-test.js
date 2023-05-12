'use strict';

const { JSDOM } = require('jsdom');
const ReactDOM = require('react-dom');

test('dummy test', () => {
  const dom = new JSDOM(
    '<!doctype html><html><body><div id="root"></div></body></html>'
  );
  global.document = dom.window.document;
  const rootContainer = document.getElementById('root');

  const root = ReactDOM.createRoot(rootContainer);
});
