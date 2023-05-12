'use strict';

const ReactFiberRoot = require('./ReactFiberRoot');

function createContainer(containerInfo) {
  return ReactFiberRoot.createFiberRoot(containerInfo);
}

module.exports = {
  createContainer,
};
