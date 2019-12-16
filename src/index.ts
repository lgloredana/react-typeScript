import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';
//import * as multiplyModule from './multiply';

const a = 5;
const b = 2;

console.log(`multiply --> ${a} * ${b} = ${multiply(a, b)}`);
console.log(`mBy2 ------> 7 * 2 = ${mBy2(7)}`);
