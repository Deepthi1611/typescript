// partial

interface Assignment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign,...propsToUpdate}
}

const assign1: Assignment = {
    studentId: 'one',
    title :'s1',
    grade: 9
}

console.log(updateAssignment(assign1, {grade: 9.5}))
const assignGraded = updateAssignment(assign1, {grade: 9.5})

// Required and Readonly
// required requires all of the properties along with verified which is an optional property
const recordAssignment = (assign: Required<Assignment>): Assignment => {
 return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified : true}
// assignVerified.grade = 88 - error
// recordAssignment(assignGraded) - error
recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> = {
    "red":"FF0000",
    "green":"00FF00",
    "blue":"0000FF"
}

type students = "Sai" | 'Deepu'
type letterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<students, letterGrades> = {
    'Sai' : 'A',
    'Deepu': 'B'
}

interface Grades {
    assign1: number
    assign2: number
}

const gradeData: Record<students, Grades> = {
    'Sai': {
        assign1: 80,
        assign2: 90
    },
    'Deepu': {
        assign1:45,
        assign2:55
    }
}

// Pick and Omit
type assignResult = Pick<Assignment, 'studentId' | 'grade'>
const score: assignResult = {
    studentId: '111',
    grade: 3434
}

type assignPreview = Omit<Assignment, 'grade' | 'verified'>
const preview: assignPreview = {
    studentId: '333',
    title: 'dgdgdf',
    // grade:333
}

// exclude and extract
// pick and omit work with interfaces whereas exclude and extract work with string literal types
type adjustedGrade = Exclude<letterGrades, 'U'>
type highGrades = Extract<letterGrades, 'A'|'B'>

// NonNullable
type allPossibleGrades = 'Dave' | 'John' | null | undefined
type namesOnly = NonNullable<allPossibleGrades>

// ReturnType
// type newAssign = {title: string, points: number}
const createNewAssign = (title: string, points: number) => {
    return { title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

// value returned from function is of newAssign type
const tsAssign:newAssign = createNewAssign("utility types", 100)

// Parameters
type assignPrams = Parameters<typeof createNewAssign>

// arguments for newAssign function
const assignArgs:assignPrams = ["generics", 300]
const tsAssign2:newAssign = createNewAssign(...assignArgs)


// Awaited - helps us with the return type of a promise
interface User {
    id: string,
    name: string,
    userName: string,
    email: string
}

// return type is a promise which is an array of users data(type User)
const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").
    then((res) => {
        return res.json()
    }).catch((error) => {
        if(error instanceof Error) {
            console.log(error)
        } 
    })
    return data
}

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

// Even though await is used inside the function, the function as a whole returns a Promise. This is because any async function in JavaScript or TypeScript always returns a promise, no matter what.
console.log(fetchUsers().then((users)=> console.log(users)))
// console.log(fetchUsers())