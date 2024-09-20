// union is like a combination of two or more types of data that can be included into a variable
// union is similar to any - it recommended to use union over any

// score can be number or string - it can allow both datatypes
let score: number | string = 33

score = '55'
// score = true - we get error

type user = {
    id: number,
    name: string
}

type Admin = {
    id: number,
    userName: string
}

const myName: Admin | user = {
    name: 'Deepthi',
    id:1
} 

function getDbId(id: number | string) {
    // id.toLowerCase() - we cannot directly use this as number can also be a type of id
    // if we want to use the methods then we should add conditional checking for this
}

// data can be either an array of numbers or an array of strings but not both
const data: number[] | string[] = [1,23,45]

// this accepts both numbers and strings in the same array however this approach is not much recommended
const data2:(number | string) [] = [1,2,'4']

// pi can have only 3.14 value that is mentioned here
let pi:3.14 = 3.14
// pi = 3.145 - not allowed

// seatAllotment can have only three values that are mentioned below
let seatAllotment: "aisle" | 'middle' | 'window'

seatAllotment = 'aisle'
// seatAllotment = 'crew' - not allowed

export {}