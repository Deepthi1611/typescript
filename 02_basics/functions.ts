function addTwo(num: number): number { // : number before { talks about the type of value that need to be returned form the function
    return num+2
    // return 'hello'
}

let result = addTwo(5)

function getUpper(value: string) {
    return value.toUpperCase()
}

getUpper("lower")

function signUpUser(name: string, email: string, password: string){

}

signUpUser('Deepthi','deepthi@gmail.com', 'Deepthi123')

// default params
let loginUser = (name: string, email:string, password: string ='Deepthi123') =>{

}

loginUser('Deepthi', 'deepthi@gmail.com')

// function getValue(val: number) { 
//     if(val > 5) {
//         return true
//     }
//     return "200 OK"
// }

// getValue(6)

// mentioning return type for arrow functions
const getHello = (): string => {
 return 'hello'
}

const heroes = ['thor', 'spiderman', 'ironman']

// type of returning value in map
heroes.map((hero): string => {
    return hero
})

function consoleError(errMsg: string): void{
    console.log(errMsg)
    // return 1
}

// return type is never - which is used when we are throwing an error or exception and terminates the program's execution
function handleError(errMsg: string): never{
    throw new Error(errMsg)
}