/**
 *  @flow
 */

import { Fiber } from './ReactInternalTypes';
import { ConcurrentMode, NoMode, TypeOfMode } from './ReactTypeOfMode';
import type { RootTag } from './ReactRootTags';
import { ConcurrentRoot } from './ReactRootTags';

function FiberNode(this: $FlowFiXMe, mode: TypeOfMode) {
  // Fiber
  this.updateQueue = null;
  this.mode = mode;
}

function createFiber(mode: TypeOfMode): Fiber {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(mode);
}

export function createHostRootFiber(tag: RootTag) {
  let mode;
  if (tag === ConcurrentRoot) {
    mode = ConcurrentMode;
    // if (isStrictMode === true || createRootStrictEffectsByDefault) {
    //   mode |= StrictLegacyMode | StrictEffectsMode;
    // }
  } else {
    mode = NoMode;
  }

  return createFiber(mode);
}
