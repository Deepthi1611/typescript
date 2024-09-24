let obj: object
obj = [] // An array is also a type of object
console.log(typeof obj) // gives type as object
obj = {}
console.log(typeof obj) // gives type as object

// prop1 is locked as string type and prop2 is locked as boolean type if types are not specified for props and value is given directly
let exampleObj = {
    prop1: 'Deepu',
    prop2: true
}

// mention the properties and types of properties of an object
type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Deepthi',
    active: true,
    albums : [1,2,'one']
}


//enums
enum Grade {
    A,
    B,
    C
}

console.log(Grade.A) // gives 0