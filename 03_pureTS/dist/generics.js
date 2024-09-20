"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// this function takes a value of any type and returns a value of same type
// example - if the function receives a value of type number, it should return a value of type number
function identityThree(val) {
    return val;
}
identityThree("string");
identityThree(3);
// It doesn't matter we use Type or T but it should be inside angular brackets
function identityFour(val) {
    return val;
}
// calling identityFour with Bottle type
identityFour({ brand: "brand", type: "type" });
// function that accepts an array of any type - array of numbers or strings or any other and return type is T
function getSearchProducts(products) {
    return products[0];
}
// generics in arrow functions
// <T,> and <T> is the same
const getMoreSearchProducts = (products) => {
    return products[0];
};
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction({
    connection: 'test', userName: 'test', password: 'test'
}, 'one');
// generic class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
// Example 1: Selling Quizzes
// You can create a cart specifically for Quiz objects:
const quizCart = new Sellable();
quizCart.addToCart({ name: "Math Quiz", type: "Multiple Choice" });
quizCart.addToCart({ name: "Science Quiz", type: "True/False" });
console.log(quizCart.cart);
// Output: [{name: "Math Quiz", type: "Multiple Choice"}, {name: "Science Quiz", type: "True/False"}]
// Here, the Sellable class is used to create a cart of quizzes. The addToCart method enforces that only Quiz objects can be added to the cart.
// Example 2: Selling Courses
// Similarly, you can create a cart specifically for Course objects:
const courseCart = new Sellable();
courseCart.addToCart({ name: "Math 101", author: "John Doe", subject: "Mathematics" });
courseCart.addToCart({ name: "Physics Basics", author: "Jane Smith", subject: "Physics" });
console.log(courseCart.cart);
// Output: [{name: "Math 101", author: "John Doe", subject: "Mathematics"}, {name: "Physics Basics", author: "Jane Smith", subject: "Physics"}]
// This time, the Sellable class is used to handle courses, allowing only Course objects to be added to the cart.
