function add(a:number, b:number): number{
    return a+b
}

// type alias for function
// type mathFunction = (a: number, b: number) => number
// interface for functions
interface mathFunction {
    (a:number, b: number): number
}

// multiply is of type mathFunction which accepts two numbers and returns a number
let multiply: mathFunction = function(c, d) {
    return c*d
}

multiply(1,2)

let division: mathFunction = function(c,d) {
    return c/d
}

// optional parameters
// optional parameter is defined by adding ? before the colon
// optional params need to be last in the params list
function addAll(a:number, b:number, c?:number): number {
    // return a+b+c - error because c can be undefined
    if(c) {
        return a+b+c
    } else {
        return a+b
    }
}

// default value
// default values are always placed right most in all params - recommended
// if default values are placed in left params then while calling the function we should explicitly mention undefined for that particular default valued parameter
function sumAll(a:number, b:number, c:number = 2): number {
    return a+b+c
}
// default values cannot be used when we use type alias for functions

// Rest parameters
// nums can accept an array of numbers of any size
// rest parameters also come at the end of all parameters
function total(a:number, ...nums: number[]): number{
    return a + nums.reduce((prev, cur) => prev + cur)
}

// never is essentially for functions that throw errors
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

// return type is never for functions having infinite loop inside it
// return type is taken as never implicitly for infinite loop and functions that throw errors
// we can also explicitly mention never as return type
const infinite = () => {
    let i: number = 1
    while(true) {
        i++
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return (typeof value === 'number' ? true : false)
}

const numberOrString = (a: number | string): string => {
    // type guards
    if (typeof a === 'string') {
        return 'string'
    }
    // if (typeof a === 'number') {
    //     return 'number'
    // }
    if(isNumber(a)) {
        return 'number'
    }
    return createError('this should never happen')
    // by commenting the above line we get error
    // In the above kind of situations like the cases which do not happen but typescript asks us to write that condition,
    // we use a function that has return type of never even though here the return type is string
}