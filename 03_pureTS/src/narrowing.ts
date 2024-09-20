interface User {
    name: string
    email: string
}

interface Admin {
    name: string, 
    email: string
    isAdmin: boolean
}

// in operator in Arrowing
function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }
    return false
} 


type fish = {swim: () => void}
type bird = {fly: () => void}

function isFish(pet: fish | bird): pet is fish{
    return (pet as fish).swim !== undefined
}

function getFood(pet: fish | bird) {
    if(isFish(pet)) {
        return 'fish food'
    }
    return 'bird food'
}

// discriminated unions
interface Circle{
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    breadth: number
}

type shape = Circle | Square | Rectangle

function getArea(shape: shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// never type
// we added default case as never so that even if in the future if any other interface gets added, 
// we will be getting an error to add that interface in the switch case as well so that the code is scalable
// we made default as never because we are not supposed to run it and we should have case for each case
function getArea2(shape: shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        default:
            const defaultForArea: never = shape
            return defaultForArea
    }
}