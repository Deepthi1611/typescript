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
Object.defineProperty(exports, "__esModule", { value: true });
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
// function withTemplate(template: string, hookId: string) {
//     // _ is used to tell JS that we know we get constructor as argument for decorator but we are not using it but as it need  to be specified we are using _
//     console.log('template factory')
//     return function(constructor: any) {
//         const hookElement = document.getElementById(hookId)
//         console.log('rendering template')
//         const c = new constructor();
//         if(hookElement) {
//             hookElement.innerHTML = template
//             // adding content inside h1 tag as name property of class
//             hookElement.querySelector('h1')!.textContent = c.name
//         }
//     }
// }
// the decorator itself is executed when the class is defined, but the behavior you see (like rendering the template) is encapsulated in the constructor of the newly returned class, 
// which only runs when an instance of that class is created. This design allows you to add functionality in a modular way while keeping class instantiation behavior intact.
function withTemplate(template, hookId) {
    // _ is used to tell JS that we know we get constructor as argument for decorator but we are not using it but as it need  to be specified we are using _
    console.log('template factory');
    // In TypeScript, even though a class is not literally an object itself, the type of a class (specifically, its constructor signature) is treated as an object type. This is why the {} braces are used to represent the shape of an object type that can describe a class constructor.
    return function (originalConstructor) {
        console.log(originalConstructor, 'original constructor');
        return class extends originalConstructor {
            constructor(...args) {
                super(); // Calls the original constructor
                // This code runs only when a new instance is created
                // The constructor is executed only when an instance of the class is created. 
                // Therefore, any code inside the constructor, including your template rendering logic, will not run until an instance is instantiated.
                console.log('rendering template');
                const hookElement = document.getElementById(hookId);
                // const c = new originalConstructor();
                if (hookElement) {
                    hookElement.innerHTML = template;
                    // adding content inside h1 tag as name property of class
                    hookElement.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
// other than class decorators, accessor and method decorators can return value - they return property descriptor 
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
const p3 = new Person3();
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
    console.log('parameter decorator');
    console.log(target, name, position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(price) {
        if (price <= 0) {
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
// decorators are executed when class/method/property are defined not when are called or executed
const product1 = new Product('book', 100);
const product2 = new Product('book', 200);
console.log(product1.price = 100);
function AutoBind(_, _2, descriptor) {
    // descriptor.value contains method
    const originaMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        // adding a getter in the descriptor such that when the method for which this decorator attached is called then
        // getter is executed and method is binded with the object with which method is called
        get() {
            // here this refers to the object with which method is called as we are inside a getter
            const boundFn = originaMethod.bind(this);
            return boundFn;
        }
    };
    // this descriptor object overrides descriptor with below descriptor
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'this works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const print = new Printer();
const button = document.querySelector('button');
// when showMessage is called without binding, this.message becomes undefined because this is referring to the button element, not the Printer instance.
// button?.addEventListener('click', print.showMessage.bind(print))
button === null || button === void 0 ? void 0 : button.addEventListener('click', print.showMessage);
const registeredValidators = {};
function Required(target, name) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { 
        // appending required to the existing array
        [name]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[name]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
function PositiveNumber(target, name) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { 
        // appending positive to the existing array
        [name]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[name]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function validate(obj) {
    // we need to validate all of the registered validators here
    console.log(registeredValidators, 'registered validators');
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    console.log(objValidatorConfig, 'object validator config');
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        // prop is the key of each object
        console.log(prop, 'prop');
        for (const validator of objValidatorConfig[prop]) {
            console.log(validator, 'validator');
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title,
            this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEle = document.getElementById('title');
    const priceEle = document.getElementById('price');
    const title = titleEle.value;
    // + is used to convert it to number
    const price = +priceEle.value;
    // now I want to create a new course with the above title and price
    const createdCourse = new Course(title, price);
    console.log(validate(createdCourse), 'validation');
    if (!validate(createdCourse)) {
        alert('Invalid input');
    }
});
