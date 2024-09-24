"use strict";
// type assertions are also known as type casting
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
// the below syntax is not supported in tsx(react)
// d is of type one
let d = 'world';
let e = 1;
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return a + " " + b;
};
// if we give the below line, we'll get an error because function may also return a number but here we are sure that we'll receive a string
// In such conditions we can use type assertion
// let myVal: string = addOrConcat(2, 2, 'concat')
// with type assertion
// we are telling typescript that we are sure that string is being returned from the function
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'add');
// 10 as string - error
10; // double casting - this overrules typescript but this is not recommended
// assertions with DOM
// ! is a non null assertion - it says that the value is not null or undefined
const img = document.querySelector('img');
// const myImg = document.getElementById('img')!
const myImg = document.getElementById('img');
const nextImg = document.getElementById('img');
img.src;
myImg.src;
nextImg.src;
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation
// let year: HTMLElement | null
// year =  document.getElementById("year")
// let thisYear: string
// thisYear =  new Date().getFullYear().toString()
// // type guard
// if(year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
// 2nd variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
