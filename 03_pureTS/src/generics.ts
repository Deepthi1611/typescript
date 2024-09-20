const scores: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number): boolean | number{
    return val
}

function identityTwo(val:any):any {
    return val
}

// this function takes a value of any type and returns a value of same type
// example - if the function receives a value of type number, it should return a value of type number
function identityThree<Type>(val: Type):Type {
    return val
}

identityThree("string")
identityThree(3)

// It doesn't matter we use Type or T but it should be inside angular brackets
function identityFour<T>(val: T):T {
    return val
}

interface Bottle {
    brand: string,
    type: string
}

// calling identityFour with Bottle type
identityFour<Bottle>({brand:"brand", type: "type"})

// function that accepts an array of any type - array of numbers or strings or any other and return type is T
function getSearchProducts<T>(products: T[]): T{
    return products[0]
}

// generics in arrow functions
// <T,> and <T> is the same
const getMoreSearchProducts = <T,>(products: T[]):T => {
    return products[0]
}

interface Database {
    connection: string,
    userName: string,
    password: string
}

function anotherFunction<T extends Database, U>(val1:T, val2: U):object {
    return {val1, val2}
}

anotherFunction({
   connection:'test', userName:'test', password:'test'
}, 'one')

interface Quiz{
    name: string
    type: string
}

interface Course{
    name: string
    author: string,
    subject: string
}

// generic class
class Sellable<T> {
    public cart: T[] = []
    addToCart(products:T){
        this.cart.push(products)
    }
}

// Example 1: Selling Quizzes
// You can create a cart specifically for Quiz objects:

const quizCart = new Sellable<Quiz>();
quizCart.addToCart({ name: "Math Quiz", type: "Multiple Choice" });
quizCart.addToCart({ name: "Science Quiz", type: "True/False" });

console.log(quizCart.cart);
// Output: [{name: "Math Quiz", type: "Multiple Choice"}, {name: "Science Quiz", type: "True/False"}]
// Here, the Sellable class is used to create a cart of quizzes. The addToCart method enforces that only Quiz objects can be added to the cart.

// Example 2: Selling Courses
// Similarly, you can create a cart specifically for Course objects:

const courseCart = new Sellable<Course>();
courseCart.addToCart({ name: "Math 101", author: "John Doe", subject: "Mathematics" });
courseCart.addToCart({ name: "Physics Basics", author: "Jane Smith", subject: "Physics" });

console.log(courseCart.cart);
// Output: [{name: "Math 101", author: "John Doe", subject: "Mathematics"}, {name: "Physics Basics", author: "Jane Smith", subject: "Physics"}]
// This time, the Sellable class is used to handle courses, allowing only Course objects to be added to the cart.