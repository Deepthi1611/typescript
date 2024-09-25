// properties and methods inside the class are called members
// class Coder{
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(name: string, music: string, age: number, lang: string){
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }

// other approach which is recommended
class Coder{
    // Here, secondLang!: string tells TypeScript: “I guarantee that this property will be assigned a value at some point before it’s accessed, even if I’m not initializing it right now.”
    secondLang!: string
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        // default value
        protected lang: string = 'Tyepscript'
    )
        {
            this.name = name
            this.music = music
            this.age = age
            this.lang = lang
    }

    // public method to access private property of class
    public getAge(){
        return this.age
    }
}

const person1 = new Coder('Deepu','rock',22)
// accessing private and protected properties will not give any error in JS

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string, 
        music: string, 
        age: number, 
    ){
        // super call should be the first line inside the constructor
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return this.lang
    }
}

const sai = new WebDev('mac', 'Sai', 'rock',33)
console.log(sai.getLang())
// sai.lang - can be accessed only inside the class and inside the sub classes

// INTERFACES
interface Musician {
    name: string,
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return action
    }
}

const page = new Guitarist('Jimmy','guitar')
console.log(page.play('strums'))


// STATIC MEMBERS
class Peeps{
    static count:number = 0
    static getCount(){
        return Peeps.count
    }
    public id: number
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const one = new Peeps('John')
const two = new Peeps('John')
const three = new Peeps('John')
const four = new Peeps('John')
console.log(Peeps.count) // we get four
console.log(two.id) // we get 2 because it was the second object created


class Bands{
    private dataState:string[]
    constructor(){
        this.dataState = []
    }
    // get is a special keyword for getters
    public get getData():string[]{
        return this.dataState
    }
    // set is a special keyword used for setters
    public set setData(value: string[]){
        if(Array.isArray(value) && value.every(element => typeof element === 'string')){
            this.dataState = value
        } else {
            throw new Error('Param is not an array of strings')
        }
    }
}