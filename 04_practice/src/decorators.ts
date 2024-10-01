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