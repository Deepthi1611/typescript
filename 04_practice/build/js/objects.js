"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj;
obj = []; // An array is also a type of object
console.log(typeof obj); // gives type as object
obj = {};
console.log(typeof obj); // gives type as object
// prop1 is locked as string type and prop2 is locked as boolean type if types are not specified for props and value is given directly
let exampleObj = {
    prop1: 'Deepu',
    prop2: true
};
let evh = {
    name: 'Deepthi',
    active: true,
    albums: [1, 2, 'one']
};
//enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
})(Grade || (Grade = {}));
console.log(Grade.A); // gives 0
// literal types
let myName;
// userName accepts only the mentioned values
let userName;
userName = 'Deepu';
