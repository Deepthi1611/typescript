"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
