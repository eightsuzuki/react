import getEventTarget from '../getEventTarget';
import { JSDOM } from 'jsdom';
import { moock } from 'mock-require';

describe('getEventTarget', () => {

let dom;
let targetNode;
let useElement;
let parentNode;
let textNode;
  beforeEach(() => {
    dom =new JSDOM(
        '<!DOCTYPE html>'
    );

  })

  test('returns the event target node', () => {
    // Create a dummy event and target node
    const targetNode = document.createElement('div');
    const event = new MouseEvent('click', { target: targetNode });

    // Call the function and expect the result to be the target node
    expect(getEventTarget(event)).toBe(targetNode);
  });

  test('handles SVG <use> elements', () => {
    // Create a dummy <use> element and event
    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const event = new MouseEvent('click', { target: useElement });

    // Set the correspondingUseElement property
    useElement.correspondingUseElement = document.createElement('div');

    // Call the function and expect the result to be the correspondingUseElement
    expect(getEventTarget(event)).toBe(useElement.correspondingUseElement);
  });

  test('handles text nodes', () => {
    // Create a dummy text node and event
    const parentNode = document.createElement('div');
    const textNode = document.createTextNode('Click me');
    parentNode.appendChild(textNode);
    const event = new MouseEvent('click', { target: textNode });

    // Call the function and expect the result to be the parent node
    expect(getEventTarget(event)).toBe(parentNode);
  });
});