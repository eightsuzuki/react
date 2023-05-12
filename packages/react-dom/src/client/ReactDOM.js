'use strict';

const ReactDOMRoot = require('./ReactDOMRoot');

function createRoot() {
  console.log('createRoot is called.');
  ReactDOMRoot.createRoot();
}

module.exports = {
  createRoot: createRoot,
};
