const user = {
    name : 'deepthi',
    email : 'deepthi@gmail.com',
    isActive: true
}

function createUser({name:string, isPaid: boolean}){

}

createUser({name:'Deepthi', isPaid: true})
// createUser({name:'Deepthi', isPaid: true, email:'deepthi@gmail.com'}) - this gives error

let myUser = {
    name: 'deepthi',
    isPaid: true,
    email: 'deepthi@gmail.com'
}

createUser(myUser) // this does not give any error which is a bad behavior of objects in TS


// function that returns an object containing name and price 
function createCourse():{name: string, price: number} {
    return {name:'Deepthi', price:100}
}

type user = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser2(user: user): user {
    return user
}

createUser2({name:'deepthi', email:"", isActive:true})

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number
}
// ? stands for optional - here credCardDetails is an optional key of User object

let myUser2 : User = {
    _id: '1',
    name: 'deepthi',
    email: 'deepthi@gmail.com',
    isActive: false
}

myUser2.email = 'deepthiP@gmail.com'
// myUser2._id = '2' - gives error as _id is readonly

type cardNumber = {
    num: string,
}

type cardDate = {
    date: string
}

// In card details we want to combine cardNumber, cardDate with cardCvv
// we can create a new type based on existing types
type credCardDetails = cardNumber & cardDate & {
    cvv: number
}