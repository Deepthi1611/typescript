"use strict";
console.log("Hello world!");
let a = 12;
let b = '2';
let c = 3;
// console.log(a/b) - error
// console.log(c*b) - error
let myName = 'Deepthi';
// myName = 1  // TS infers myName as a string when we assigned previous value, so it gives us an error here that
// cannot assign number to a string
// union type - type annotation is union type - combining 2 or more datatypes
let album;
// regular expression type
let re = /\w+/g;
