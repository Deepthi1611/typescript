// CLASS DECORATORS
function Logger(constructor: Function) {
    console.log(`Class ${constructor.name} was created`);
}

@Logger
class Product {
    constructor(public name: string) {}
}

const product1 = new Product("Laptop");
const product2 = new Product("mobile")

function AddTimestamp(constructor: Function) {
    constructor.prototype.timestamp = new Date();
}

@AddTimestamp
class Order {
    orderId: number;

    constructor(orderId: number) {
        this.orderId = orderId;
    }
}

const order = new Order(123);
console.log(order); // { orderId: 123, timestamp: <current date> }
const order2 = new Order(345);
console.log(order2)

// METHOD DECORATORS
function Authorize(role: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (this: AdminPanel, ...args: any[]) {
            // 'this' is now explicitly typed as 'AdminPanel'
            if (this.userRole !== role) {
                throw new Error("Unauthorized");
            }
            return originalMethod.apply(this, args);
        };
    };
}

class AdminPanel {
    userRole: string = 'user';

    @Authorize('admin')
    deleteUser(userId: string) {
        console.log(`User ${userId} deleted.`);
    }
}

const panel = new AdminPanel();
// panel.deleteUser('123'); // Throws "Unauthorized" because userRole is 'user'


function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    };
  }

class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
   
    @enumerable(false)
    greet() {
      return "Hello, " + this.greeting;
    }
}

const greet = new Greeter("Hello world!")
console.log(greet.greet())

// ACCESSOR DECORATORS
function LogAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        console.log(`Getting value of ${propertyKey}`);
        return originalGetter && originalGetter.call(this);
    };
}

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @LogAccess
    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}

const person = new Person("John");
console.log(person.name); // Logs: "Getting value of name", followed by "John"

function ValidateAge(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSetter = descriptor.set;

    descriptor.set = function (age: number) {
        if (age < 0 || age > 120) {
            throw new Error('Invalid age value');
        }
        if (originalSetter) {
            originalSetter.call(this, age);
        }
    };
}

class User {
    private _age: number = 0;

    @ValidateAge
    set age(age: number) {
        this._age = age;
    }

    get age(): number {
        return this._age;
    }
}

const user = new User();
user.age = 25;  // Works fine
user.age = -5;  // Throws "Invalid age value"