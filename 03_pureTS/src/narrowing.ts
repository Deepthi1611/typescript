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