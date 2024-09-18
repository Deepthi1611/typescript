// superHeroes is an array of strings
const superHeroes: string[] = []
const heroPowers: number[] = []

superHeroes.push("spider man")
heroPowers.push(1)

// other declaration
const superHeroes2: Array<string> = []
// the above declaration is used when we want type of Array which an explicit type defined

type user = {
    name: string,
    isActive: boolean
}

const allUsers : Array<user> = []

allUsers.push({name:"Deepthi", isActive: true})

// array of arrays of numbers
const MlModels: number[][] = [
    [1,2,3],
    [4,5,6]
]

// we can also declare readonly array

export {}