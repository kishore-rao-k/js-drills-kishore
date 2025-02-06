import { keys, values, mapObject, pairs, invert, defaults } from './solutions.js'

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

//keys
// console.log(keys(testObject));
// console.log(values(testObject));

function cb(key, value) {
    if (key === "name") {
        return value = "kisore"
    }
    if (key === "location") {
        return value = "blr"
    }
    if (key === "age") {
        return value += 5;
    }
}
// console.log(mapObject(testObject, cb));
// console.log(pairs(testObject));
// console.log(invert(testObject));


const defaultsObj1 = { age: 38, country: "USA", email: "abc@gmail.com" };
console.log(defaults(testObject, defaultsObj1));