const stringEcho = (arg: string): string => {
    return arg
}
// the above function works only with function
// if we want a function which takes a parameter and returns the same parameter but it should work for all types
// we need a generic function for such case
// generics in functions
const Echo = <T>(val: T):T =>  val
// the above function works with any type

const isObject = <T>(arg: T): boolean => {
    return (arg && typeof arg === 'object' && !Array.isArray(arg))
}

// return type is an object that contains arg and is as keys and we have mentioned types of those values that need to be in the keys
const isTrue = <T>(arg: T):{arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if(isObject(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

// generics in interfaces
interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T):BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }
    if(isObject(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

interface HasId {
    id: number
}

// as we have extended T with the interface, user should contain id property in it
const processUser = <T extends HasId>(user:T): T => {
    return user
}

// users is an array of objects where each object contain id as property, k is any of the keys of user object
// return type is an array which contains a particular key values of all users
const getUsersProperty = <T extends HasId, K extends keyof T>(users:T[], key: K):T[K][] => {
    return users.map((user) => user[key])
}

// generics in classes
class StateObject<T> {
    private data: T
    constructor(val: T) {
        this.data = val
    }
    get state():T {
        return this.data
    }
    set state(val:T) {
        this.data = val
    }
}

const store = new StateObject('john')
// getters and setters are called without paranthesis
console.log(store.state)
store.state = 'Deepu'
// store.state = 12 - error because data is infered as string type when we intialised it as john

// specifying the exact type we are using in our state 
const store2 = new StateObject<(string | number | boolean)[]>([15])
store2.state = [42, true]
console.log(store2.state)