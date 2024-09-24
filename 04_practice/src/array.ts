let stringArray = ['one', 'two', 'three']

let guitars = ['start', 'les paul', 5150]

let mixedData = ['EVH', 1984, true]

// TS implicitly infers that stringArray contains string type elements only
// stringArray.push(11) - error
// guitars.push(true) - error

// stringArray = guitars - error

// explicit type annotation for arrays
let bands: string[]

// tuple
// below variable should contain exactly three members in the specified order
let tuple: [string, number, boolean]
tuple = ['string', 11, true]

// tuple[3] = 22 - error

// mixed is an array that can contain string or number or boolean types of members
let mixed = ['one', 12, false]

// tuple = mixed - error because mixed array don't have any restrictions like tuple array has
mixed = tuple