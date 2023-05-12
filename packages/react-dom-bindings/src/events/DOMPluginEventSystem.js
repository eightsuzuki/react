/**
 *  @flow
 */

import {
    SHOULD_NOT_DEFER_CLICK_FOR_FB_SUPPORT_MODE,
    IS_LEGACY_FB_SUPPORT_MODE,
    SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS,
    IS_CAPTURE_PHASE,
    IS_EVENT_HANDLE_NON_MANAGED_NODE,
    IS_NON_DELEGATED,
  } from './EventSystemFlags';
  import {isReplayingEvent} from './CurrentReplayingEvent';


export const mediaEventTypes: Array<DOMEventName> = [
    'abort',
    'canplay',
    'canplaythrough',
    'durationchange',
    'emptied',
    'encrypted',
    'ended',
    'error',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'playing',
    'progress',
    'ratechange',
    'resize',
    'seeked',
    'seeking',
    'stalled',
    'suspend',
    'timeupdate',
    'volumechange',
    'waiting',
  ];

const listeningMarker = '_reactListening' + Math.random().toString(36).slice(2);

export function listenToNonDelegatedEvent(
    domEventName: DOMEventName,
    targetElement: Element,
  ): void {
    if (__DEV__) {
      if (!nonDelegatedEvents.has(domEventName)) {
        console.error(
          'Did not expect a listenToNonDelegatedEvent() call for "%s". ' +
            'This is a bug in React. Please file an issue.',
          domEventName,
        );
      }
    }
    const isCapturePhaseListener = false;
    const listenerSet = getEventListenerSet(targetElement);
    const listenerSetKey = getListenerSetKey(
      domEventName,
      isCapturePhaseListener,
    );
    if (!listenerSet.has(listenerSetKey)) {
      addTrappedEventListener(
        targetElement,
        domEventName,
        IS_NON_DELEGATED,
        isCapturePhaseListener,
      );
      listenerSet.add(listenerSetKey);
    }
  }

export function listenToAllSupportedEvents(rootContainerElement: EventTarget) {
    if (!(rootContainerElement: any)[listeningMarker]) {
      (rootContainerElement: any)[listeningMarker] = true;
      allNativeEvents.forEach(domEventName => {
        // We handle selectionchange separately because it
        // doesn't bubble and needs to be on the document.
        if (domEventName !== 'selectionchange') {
          if (!nonDelegatedEvents.has(domEventName)) {
            listenToNativeEvent(domEventName, false, rootContainerElement);
          }
          listenToNativeEvent(domEventName, true, rootContainerElement);
        }
      });
      const ownerDocument =
        (rootContainerElement: any).nodeType === DOCUMENT_NODE
          ? rootContainerElement
          : (rootContainerElement: any).ownerDocument;
      if (ownerDocument !== null) {
        // The selectionchange event also needs deduplication
        // but it is attached to the document.
        if (!(ownerDocument: any)[listeningMarker]) {
          (ownerDocument: any)[listeningMarker] = true;
          listenToNativeEvent('selectionchange', false, ownerDocument);
        }
      }
    }
  }
  