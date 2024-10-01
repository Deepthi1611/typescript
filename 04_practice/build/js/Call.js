let name = {
    firstName: "Deepthi",
    lastName: "Purijala",
    // printFullName : () => {
    //     console.log(this.firstName + " " + this.lastName)
    // }
}

let printFullName = (homeTown) => {
    console.log(this.firstName + " " + this.lastName, + " " + homeTown)
}

// name.printFullName()
printFullName.call(name, 'Hyderabad')

let name2 = {
    firstName: "Sai",
    lastName: "test"
}

// function borrowing - we can borrow functions from other objects and use it in other objects
// function borrowing can be done using call method, we pass the reference of the object as first argument for the call method
// name.printFullName.call(name2)
printFullName.call(name2, 'Chennai')

// the only difference between call and apply methods is the way we pass the arguments
// first argument is reference, second argument is list to the args that we have to pass to the function
printFullName.apply(name2, ['chennai'])

// bind
// bind is similar when it comes to function call
// instead of directly calling the method, bind method binds method with object and returns the copy of the method
let printing = printFullName.bind(name2, "Chennai")
printing()