"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// CLASS DECORATORS
// decorator is a function 
// decorator generally starts with capital character
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
// decorator executes when a class is defined not when a class is instantiated
// decorator is executed when JS finds class definition
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('creating person object');
    }
};
Person = __decorate([
    Logger
], Person);
const p1 = new Person();
// decorator factory that returns a decorator function
function Logger2(logString) {
    console.log('logger factory');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// for decorator factory we need to give decorator as a function call as the decorator factory returns a function and we should execute it
// passing custom values as args for decorator factory which is not possible with decorators directly
let Person2 = class Person2 {
    constructor() {
        this.name = 'Max';
        console.log('creating person object');
    }
};
Person2 = __decorate([
    Logger2('Logging person-2')
], Person2);
function withTemplate(template, hookId) {
    // _ is used to tell JS that we know we get constructor as argument for decorator but we are not using it but as it need  to be specified we are using _
    console.log('template factory');
    return function (constructor) {
        const hookElement = document.getElementById(hookId);
        console.log('rendering template');
        const c = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            // adding content inside h1 tag as name property of class
            hookElement.querySelector('h1').textContent = c.name;
        }
    };
}
// actual decorators are executed from bottom to top but decorator factories are executed top to bottom
Logger2('logging person-3');
let Person3 = class Person3 {
    constructor() {
        this.name = 'Max';
        console.log('creating person object');
    }
};
Person3 = __decorate([
    withTemplate('<h1>My h1 Object</h1>', 'app')
], Person3);
// PROPERTY DECORATORS
// for instance properties, target receives prototype of the object that was created, for static properties target refers to constructor function
function LogDecorator(target, propertyName) {
    console.log('property decorator');
    console.log(target, propertyName);
}
// property decorator is executed when property is defined inside a class
// ACCESSOR DECORATOR
function log2(target, propertyName, propertyDescriptor) {
    console.log('accessor decorator');
    console.log(target, propertyName, propertyDescriptor);
}
// METHOD DECORATOR
// target: any - The prototype of the class for instance methods, or the constructor function for static methods.
// name: string - The name of the method being decorated (as a string).
// descriptor: PropertyDescriptor - The property descriptor object for the method being decorated, which allows you to modify the behavior of the method.
function log3(target, name, descriptor) {
    console.log('method decorator');
    console.log(target, name, descriptor);
}
// PARAMETER DECORATOR
// name is the name of the method in which param is used
// position is the position of the arg in the method
function log4(target, name, position) {
    console.log('paramter decorator');
    console.log(target, name, position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(price) {
        if (price > 0) {
            throw new Error('price should be greater than 0');
        }
        this._price = price;
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    LogDecorator
], Product.prototype, "title", void 0);
__decorate([
    log2
], Product.prototype, "price", null);
__decorate([
    log3,
    __param(0, log4)
], Product.prototype, "getPriceWithTax", null);
