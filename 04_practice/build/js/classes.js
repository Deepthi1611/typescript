"use strict";
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
class Coder {
    constructor(name, music, age, 
    // default value
    lang = 'Tyepscript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // public method to access private property of class
    getAge() {
        return this.age;
    }
}
const person1 = new Coder('Deepu', 'rock', 22);
// accessing private and protected properties will not give any error in JS
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        // super call should be the first line inside the constructor
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return this.lang;
    }
}
const sai = new WebDev('mac', 'Sai', 'rock', 33);
console.log(sai.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return action;
    }
}
const page = new Guitarist('Jimmy', 'guitar');
console.log(page.play('strums'));
// STATIC MEMBERS
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const one = new Peeps('John');
const two = new Peeps('John');
const three = new Peeps('John');
const four = new Peeps('John');
console.log(Peeps.count); // we get four
console.log(two.id); // we get 2 because it was the second object created
class Bands {
    constructor() {
        this.dataState = [];
    }
    // get is a special keyword for getters
    get getData() {
        return this.dataState;
    }
    // set is a special keyword used for setters
    set setData(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
