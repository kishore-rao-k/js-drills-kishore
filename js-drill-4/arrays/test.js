import {
    each, map, reduce, find, filter, flatten
} from './solutions.js'
const items = [1, 2, 3, 4, 5, 5];  // use this array to test your code.
// const obj = {2:20,3:30,4:40};


//each
function addIndex(num, index) {
    let sum = 0;
    sum = num + index;
    return sum;
}
// console.log(each(items, addIndex));

// map
function double(num, multiply) {
    let sum = 0;
    sum = num * multiply;
    return sum;
}
// console.log(map(items, (i) => { return i * 2 }));

//reduce
function add(num, acc, initialValue) {
    let sum = initialValue;
    sum = num + acc;
    return sum;
}
// console.log(reduce(items, add, 0));

//find
function search(num, matchNum) {
    if (num == matchNum) {
        return true;
    } else {
        return false;
    }
}
// console.log(find(items, search));

//filter
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(filter(items, isEven));

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
console.log(flatten(nestedArray));
