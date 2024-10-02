// CLASS DECORATORS
// decorator is a function 
// decorator generally starts with capital character
function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

// decorator executes when a class is defined not when a class is instantiated
// decorator is executed when JS finds class definition
@Logger
class Person {
    name = 'Max'
    constructor() {
        console.log('creating person object')
    }
}

const p1 = new Person()

// decorator factory that returns a decorator function
function Logger2(logString: string) {
    console.log('logger factory')
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

// for decorator factory we need to give decorator as a function call as the decorator factory returns a function and we should execute it
// passing custom values as args for decorator factory which is not possible with decorators directly
@Logger2('Logging person-2')
class Person2 {
    name = 'Max'
    constructor() {
        console.log('creating person object')
    }
}

function withTemplate(template: string, hookId: string) {
    // _ is used to tell JS that we know we get constructor as argument for decorator but we are not using it but as it need  to be specified we are using _
    console.log('template factory')
    return function(constructor: any) {
        const hookElement = document.getElementById(hookId)
        console.log('rendering template')
        const c = new constructor();
        if(hookElement) {
            hookElement.innerHTML = template
            // adding content inside h1 tag as name property of class
            hookElement.querySelector('h1')!.textContent = c.name
        }
    }
}

// actual decorators are executed from bottom to top but decorator factories are executed top to bottom
Logger2('logging person-3')
@withTemplate('<h1>My h1 Object</h1>', 'app')
class Person3 {
    name = 'Max'
    constructor() {
        console.log('creating person object')
    }
}

// PROPERTY DECORATORS
// for instance properties, target receives prototype of the object that was created, for static properties target refers to constructor function
function LogDecorator(target: any, propertyName: string | symbol) {
    console.log('property decorator')
    console.log(target, propertyName)
}
// property decorator is executed when property is defined inside a class

// ACCESSOR DECORATOR
function log2(target: any, propertyName:string, propertyDescriptor: PropertyDescriptor ) {
    console.log('accessor decorator')
    console.log(target, propertyName, propertyDescriptor)
}

// METHOD DECORATOR
// target: any - The prototype of the class for instance methods, or the constructor function for static methods.
// name: string - The name of the method being decorated (as a string).
// descriptor: PropertyDescriptor - The property descriptor object for the method being decorated, which allows you to modify the behavior of the method.
function log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('method decorator')
    console.log(target, name, descriptor)
}

// PARAMETER DECORATOR
// name is the name of the method in which param is used
// position is the position of the arg in the method
function log4(target: any, name: string, position: number) {
    console.log('paramter decorator')
    console.log(target, name, position)
}
class Product{
    @LogDecorator
    title: string
    private _price: number
    constructor(title: string, price: number) {
        this.title = title
        this._price = price
    }

    @log2
    set price(price: number) {
        if(price > 0) {
            throw new Error('price should be greater than 0')
        }
        this._price = price
    }

    @log3
    getPriceWithTax(@log4 tax: number) {
        return this.price * (1 + tax)
    }
}