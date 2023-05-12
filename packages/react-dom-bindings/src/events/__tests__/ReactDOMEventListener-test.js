import {JSDOM} from 'jsdom';

import { 
  dispatchDiscreteEvent,
  getEventPriority 
} from '../ReactDOMEventListener';

test('call test', () => {
  getEventPriority('message');
});

test('dispathEvent tests',() => {
  const domEventName = 'click';
  const eventSystemFlags = { bubbles: true};
  // const container = document.createElement('div');
  const nativeEvent = {type: 'click'};
  const dom = new JSDOM('<!DCTYPE html><html><body></body></html>');
  const { window }  = dom;
  const { document } = window;

  const myButton =document.createElement('buttton');
  myButton.textContent ='Click me';

  document.body.appendChild(myButton);

  myButton.addEventListener('click', () =>{
    console.log('Button clicked!');  
  });

  dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent);
});


