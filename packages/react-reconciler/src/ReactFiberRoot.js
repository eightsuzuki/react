'use strict';

function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  return root;
}

module.exports = {
  createFiberRoot,
};
