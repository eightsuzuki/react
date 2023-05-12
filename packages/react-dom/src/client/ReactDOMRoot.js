'use restrict';

import { createContainer } from 'react-reconciler/src/ReactFiberReconciler';
const { Dispatcher } = ReactDomSharedInternals;
import {ReactDOMClientDispatcher} from 'react-dom-bindings/src/client/ReactDOMHostConfig';
import {markContainerAsRoot} from 'react-dom-bindings/src/client/ReactDOMHostConfig';

function createRoot(container) {
  const root = createContainer(container);
  return root;
}

export { createRoot };
