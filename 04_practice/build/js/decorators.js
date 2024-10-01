"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// CLASS DECORATORS
function Logger(constructor) {
    console.log(`Class ${constructor.name} was created`);
}
let Product = class Product {
    constructor(name) {
        this.name = name;
    }
};
Product = __decorate([
    Logger
], Product);
const product1 = new Product("Laptop");
const product2 = new Product("mobile");
function AddTimestamp(constructor) {
    constructor.prototype.timestamp = new Date();
}
let Order = class Order {
    constructor(orderId) {
        this.orderId = orderId;
    }
};
Order = __decorate([
    AddTimestamp
], Order);
const order = new Order(123);
console.log(order); // { orderId: 123, timestamp: <current date> }
const order2 = new Order(345);
console.log(order2);
// METHOD DECORATORS
function Authorize(role) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // 'this' is now explicitly typed as 'AdminPanel'
            if (this.userRole !== role) {
                throw new Error("Unauthorized");
            }
            return originalMethod.apply(this, args);
        };
    };
}
class AdminPanel {
    constructor() {
        this.userRole = 'user';
    }
    deleteUser(userId) {
        console.log(`User ${userId} deleted.`);
    }
}
__decorate([
    Authorize('admin')
], AdminPanel.prototype, "deleteUser", null);
const panel = new AdminPanel();
// panel.deleteUser('123'); // Throws "Unauthorized" because userRole is 'user'
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
const greet = new Greeter("Hello world!");
console.log(greet.greet());
// ACCESSOR DECORATORS
function LogAccess(target, propertyKey, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        console.log(`Getting value of ${propertyKey}`);
        return originalGetter && originalGetter.call(this);
    };
}
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
__decorate([
    LogAccess
], Person.prototype, "name", null);
const person = new Person("John");
console.log(person.name); // Logs: "Getting value of name", followed by "John"
function ValidateAge(target, propertyKey, descriptor) {
    const originalSetter = descriptor.set;
    descriptor.set = function (age) {
        if (age < 0 || age > 120) {
            throw new Error('Invalid age value');
        }
        if (originalSetter) {
            originalSetter.call(this, age);
        }
    };
}
class User {
    constructor() {
        this._age = 0;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
__decorate([
    ValidateAge
], User.prototype, "age", null);
const user = new User();
user.age = 25; // Works fine
user.age = -5; // Throws "Invalid age value"
