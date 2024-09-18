// tuples is found only in TS but not in JS
// tuple is a kind of specialised array that is given with some restrictions

// const users: ( string | number )[] = ['one', 'two']
// now I want to restrict the above array that first it should accept string then number then boolean
// for that we use tuple
let user: [string, number, boolean]

user = ['test', 12, true]
// user = ['test', 'test2'] - not allowed - second one should be a number

// last number is optional here which is opacity
let rgb : [number, number, number, number?]

rgb = [245,245,245]
rgb = [245,245,245,0.5]

// user2 is like an array that should accept two elements among which first element is a number and second element is a string
type user2 = [number, string]

// newUser must contain number as first value then string type as second value
let newUser: user2 = [1,'Deepthi']
// newUser[0] = 'test' - not allowed - as first position should be number
// newUser[1] = 1 - not allowed

// Actually this should not be allowed as user2 type should contain only two elements of type number and string
// this is a kind of loophole in tuples in TS
// we can refer to a stackoverflow blog regarding this
newUser.push(100)

export {}