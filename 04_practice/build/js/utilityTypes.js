"use strict";
// partial
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'one',
    title: 's1',
    grade: 9
};
console.log(updateAssignment(assign1, { grade: 9.5 }));
const assignGraded = updateAssignment(assign1, { grade: 9.5 });
// Required and Readonly
// required requires all of the properties along with verified which is an optional property
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88 - error
// recordAssignment(assignGraded) - error
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    "red": "FF0000",
    "green": "00FF00",
    "blue": "0000FF"
};
const finalGrades = {
    'Sai': 'A',
    'Deepu': 'B'
};
const gradeData = {
    'Sai': {
        assign1: 80,
        assign2: 90
    },
    'Deepu': {
        assign1: 45,
        assign2: 55
    }
};
const score = {
    studentId: '111',
    grade: 3434
};
const preview = {
    studentId: '333',
    title: 'dgdgdf',
    // grade:333
};
// ReturnType
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
// value returned from function is of newAssign type
const tsAssign = createNewAssign("utility types", 100);
// arguments for newAssign function
const assignArgs = ["generics", 300];
const tsAssign2 = createNewAssign(...assignArgs);
// return type is a promise which is an array of users data(type User)
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users").
        then((res) => {
        return res.json();
    }).catch((error) => {
        if (error instanceof Error) {
            console.log(error);
        }
    });
    return data;
});
// Even though await is used inside the function, the function as a whole returns a Promise. This is because any async function in JavaScript or TypeScript always returns a promise, no matter what.
console.log(fetchUsers().then((users) => console.log(users)));
// console.log(fetchUsers())
