"use strict";
const stringEcho = (arg) => {
    return arg;
};
// the above function works only with function
// if we want a function which takes a parameter and returns the same parameter but it should work for all types
// we need a generic function for such case
// generics in functions
const Echo = (val) => val;
// the above function works with any type
const isObject = (arg) => {
    return (arg && typeof arg === 'object' && !Array.isArray(arg));
};
// return type is an object that contains arg and is as keys and we have mentioned types of those values that need to be in the keys
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// as we have extended T with the interface, user should contain id property in it
const processUser = (user) => {
    return user;
};
// users is an array of objects where each object contain id as property, k is any of the keys of user object
// return type is an array which contains a particular key values of all users
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
// generics in classes
class StateObject {
    constructor(val) {
        this.data = val;
    }
    get state() {
        return this.data;
    }
    set state(val) {
        this.data = val;
    }
}
const store = new StateObject('john');
// getters and setters are called without paranthesis
console.log(store.state);
store.state = 'Deepu';
// store.state = 12 - error because data is infered as string type when we intialised it as john
// specifying the exact type we are using in our state 
const store2 = new StateObject([15]);
store2.state = [42, true];
console.log(store2.state);
