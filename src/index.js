import './styles.css';
console.log('run');

import './js/test';

// import print from './js/test'; default import
// console.log(print);
// print('hell');

// именованный импорт
import { pi, printPi } from './js/test';
console.log(pi);
printPi('JS');

// именованный импорт

import * as object from './js/test';
console.log(object.pi);
object.printPi('JS');

object.data.test = 5;
console.log(object.data);
