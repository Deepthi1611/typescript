interface User {
    id: number,
    email: string,
    googleId?: string,
    // startTrail: () => string // return type is string
    startTrail(): string // method that returns string
    getCoupon(name: string):number
}

// adding one more field to the interface - also known as reopening an interface
interface User {
    gitHubToken: string
}

// we can inherit an interface using extends keyword
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

let Deepthi: User
Deepthi = {id:1, email:'deepthi@gmail.com', startTrail : () => {
return 'trail'
},
getCoupon:(name: "Deepthi10")=>{
    return 5
},
gitHubToken: "123445"
}
Deepthi.email = 'deepthiP@gmail.com'

let admin: Admin
admin = {id:1, email:'deepthi@gmail.com', startTrail : () => {
    return 'trail'
    },
    getCoupon:(name: "Deepthi10")=>{
        return 5
    },
    gitHubToken: "123445",
    // role:"test" - not allowed
    role: "admin"
    }

export {}