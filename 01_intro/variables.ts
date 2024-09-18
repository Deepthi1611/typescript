let greetings: string = 'Hello World!'
// let num: number = 6

// num.toUpperCase() - gives error as toUpperCase is not applicable for number
// greetings = 6 - gives error as greetings is a string and cannot assign number to it
console.log(greetings)

// number - both Integer and float
let userId: number = 123456
// we can also write let userId = 123456 - In this case Typescript identifies that userId is a number even without specifying

// boolean
let isLoggedIn: boolean = false

// variableName. - provides all the functions that are related to that particular type


// any - it basically turns off the type checking for this variable, to avoid this we use noimpilicitany
let hero;

function getHero(){
    return 'thor'
}

hero = getHero()