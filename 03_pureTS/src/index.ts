// define a class called User
// class User {
//     email: string
//     name: string
//     // city is private
//     private  city: string = "" // field needs an initialiser
//     constructor(name: string, email: string) {
//         this.email = email,
//         this.name = name
//         this.city = 'Hyderabad'
//     }
// }
// By default all fields inside a class are public

// creating an object for the class User
// const deepthi = new User('Deepthi', 'deepthi@gmail.com')
// deepthi.city = 2 - not allowed
// deepthi.city = 'Hyderabad' - cannot access private field outside the class



// shorter and better way to write the above class which is recommended
class User {
    protected courseCount = 1
    constructor(public name: string, public email: string, private city: string) {
        this.email = email,
        this.name = name
        this.city = city
    }
    // we need to add prefix get for getters
    // getters are used for both private and public properties - but generally used for private properties
    get getEmail(){
        return this.email
    }
    // we need to add set as prefix for setters
    // setters and getters cannot have return type
    set setEmail(email: string){
        this.email = email
    }
    // private method - accessible only within the class
    private deleteCity(){
        console.log('city is deleted')
    }
}

const deepthi = new User('Deepthi', 'deepthi@gmail.com', 'Hyderabad')
// deepthi.deleteCity() - not accessible

// inherit parent class called User
// private properties of parent class cannot be acquired inside the child class
// protected properties are accessible within the class and within all classes that inherit that particular class
class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        return this.courseCount+1
    }
}

// protected property is even accessible inside the class that got inherited from the child class of the parent class
class SubUser2 extends subUser {
    changeCourseCount() {
        return this.courseCount+1
    }
}

const subUser2 = new SubUser2('deepu', 'deepu@gmail.com', 'Hyderbad')
console.log(subUser2.changeCourseCount())