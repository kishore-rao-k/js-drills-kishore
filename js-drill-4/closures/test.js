import { counterFactory, limitFunctionCallCount, cacheFunction } from './solution.js'


// let store = counterFactory();

// console.log(store.increment());
// console.log(store.increment());
// console.log(store.increment());
// console.log(store.increment());
// console.log(store.increment());
// console.log(store.increment());

// console.log(store.decrement());
// console.log(store.decrement());
// console.log(store.decrement());
// console.log(store.decrement());
// console.log(store.decrement());



function cb() {
    return "hi";
}


// let result = limitFunctionCallCount(cb, 3);


// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result())

function add(a, b) {

    return a + b;
}
let result = cacheFunction(add);
console.log(result(2, 3));
console.log(result(3, 3));
console.log(result(2, 4));
console.log(result(2, 4));
console.log(result(1, 3));
console.log(result(2, 3));

cacheFunction