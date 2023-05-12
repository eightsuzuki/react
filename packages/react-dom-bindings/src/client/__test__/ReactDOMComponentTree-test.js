import { 
    getClosestInstanceFromNode, 
    precacheFiberNode,
} from '../ReactDOMComponentTree';

import { JSDOM } from 'jsdom'; 

test('getClosesetInstanceFromNode', ()=>{
    dom = new JSDOM(
        '<!DOCTYPE html><div><svg><use></use></svg><div>Click me</div></div>'
      );
    global.window = dom.window;
    const targetNode = dom.window.document.querySelector('div');
    
    precacheFiberNode({}, targetNode);
    getClosestInstanceFromNode(targetnode);
});

test('precacheFiberNode', ()=>{
      precacheFiberNode(hostInst, node);
      expect(node.hasOwnProperty('internalInstanceKey')).toBe(true);
      expect(node[internalInstanceKey]).toBe(hostInst);
      console.log(event);
    });

