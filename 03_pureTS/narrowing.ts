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