
export { counterFactory, limitFunctionCallCount, cacheFunction }

function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let n = 10;
    let obj = {
        increment: function () {
            return ++n;
        },
        decrement: function () {
            return --n;
        }
    };
    return obj;
}

function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    let c = 0;
    return function () {

        if (c === n) {

            return null;
        }
        c++;

        return cb();

    }
}

function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.

    let cacheStorage = {};
    return function (num1, num2) { //...args
        let key = JSON.stringify([num1, num2]); //...args
        // console.log(key);
        if (cacheStorage.hasOwnProperty(key)) {
            return "Result is return from cache: " + cacheStorage[key];
        }

        let result = cb(num1, num2);//...args
        cacheStorage[key] = result;
        return result;
    };

}