import {

    inventory
} from './persons.js'

import { getId, getLastCar, getSorted, getYear, getOlder, getBmwAndAudi } from './solution.js';
// ==== Problem #1 ====
console.log(getId(inventory));
console.log(getId());
console.log(getId(1));

// ==== Problem #2 ====
console.log(getLastCar(inventory));
console.log(getId());
console.log(getId(1));

// ==== Problem #3 ==
console.log(getSorted(inventory));
console.log(getSorted());
console.log(getSorted(1));

// ==== Problem #4 ====
console.log(getYear(inventory));
console.log(getYear());
console.log(getYear(1));

// ==== Problem #5 ====
console.log(getOlder(inventory));
console.log(getOlder());
console.log(getOlder(1));

// ==== Problem #6 ====
console.log(JSON.stringify(getBmwAndAudi(inventory)));
console.log(getBmwAndAudi());
console.log(getBmwAndAudi(1));