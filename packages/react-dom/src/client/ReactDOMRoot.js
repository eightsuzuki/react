'use restrict';

const {
  createContainer,
} = require('react-reconciler/src/ReactFiberReconciler');

function createRoot(container) {
  const root = createContainer(container);
  return root;
}

module.exports = {
  createRoot: createRoot,
};
