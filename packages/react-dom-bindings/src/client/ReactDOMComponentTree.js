/**
 * @flow
 */

import { Container } from './ReactDOMHostConfig';
import { Fiber } from 'react-reconciler/src/ReactInternalTypes';

const randomKey = Math.random().toString(36).slice(2);
const internalContainerInstanceKey = '__reactContainer$' + randomKey;

export function markContainerAsRoot(hostRoot: Fiber, node: Container): void {
  // $FlowFixMe[prop-missing]
  node[internalContainerInstanceKey] = hostRoot;
}
