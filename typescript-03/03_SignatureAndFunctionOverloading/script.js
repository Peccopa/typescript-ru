"use strict";
function a(x, y) {
    return x + y;
}
let b = (x, y) => x + y;
let c; // Signature
c = function (x, y) {
    return x + y;
};
function d(x, y) {
    console.log(x + y);
}
function e(x) {
    throw new Error(x);
}
function f(x, y) {
    if (typeof x === 'number') {
        return x + y;
    }
    else if (typeof x === 'string') {
        x = x.toUpperCase();
        return `${x} ${y}`;
    }
}
console.log(f(1, 2));
console.log(f('hello', 2));
//
//# sourceMappingURL=script.js.map