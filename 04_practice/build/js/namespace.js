"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils2 = void 0;
var MathUtils;
(function (MathUtils) {
    MathUtils.add = (a, b) => a + b;
    MathUtils.subtract = (a, b) => a - b;
})(MathUtils || (MathUtils = {}));
// Accessing items from the namespace
const sum = MathUtils.add(5, 3);
console.log(sum); // Output: 8
var MathUtils2;
(function (MathUtils2) {
    function add(a, b) {
        return a + b;
    }
    MathUtils2.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils2.subtract = subtract;
})(MathUtils2 || (exports.MathUtils2 = MathUtils2 = {}));
