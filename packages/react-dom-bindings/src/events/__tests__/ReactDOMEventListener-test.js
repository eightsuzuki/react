import { JSDOM } from 'jsdom';

import {
  dispatchDiscreteEvent,
  getEventPriority,
} from '../ReactDOMEventListener';

test('call test', () => {
  getEventPriority('message');
});

test('dispatchEvent tests', () => {
  const domEventName = 'click';
  const eventSystemFlags = { bubbles: true };
  // const container = document.createElement('div');
  const nativeEvent = { type: 'click' };
  // Create a virtual DOM using JSDOM
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const { window } = dom;
  const { document } = window;

  // Create a button element
  const myButton = document.createElement('button');
  myButton.textContent = 'Click me';

  // Append the button to the body of the virtual DOM
  document.body.appendChild(myButton);

  // Add an event listener to the button
  myButton.addEventListener('click', () => {
    console.log('Button clicked!');
  });

  // Call the function to be tested
  dispatchDiscreteEvent(domEventName, eventSystemFlags, myButton, nativeEvent);
});

test('call test', () => {
  getEventPriority('message');
});