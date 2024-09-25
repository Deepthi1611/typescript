"use strict";
// Index signatures
// interface Transactionobj {
//     pizza: number,
//     books: number,
//     job: number
// }
const todaysTransactions = {
    pizza: -10,
    books: -5,
    job: 50
};
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // transaction is the key of each property
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
console.log(todaysTransactions['Deepu']);
const student = {
    name: 'Deepu',
    gpa: 9.0,
    classes: [1, 2]
};
// console.log(student.test) 
// In TypeScript, keyof is a type operator that extracts the union of all keys (property names) of a given type. It is used to create a type that represents the keys of an object type
for (const key in student) {
    console.log(`${key} - ${student[key]}`);
}
// keyof Student creates a union type of all the keys of the Student interface: 'name' | 'gpa' | 'classes'.
// key as keyof Student ensures that TypeScript knows that the variable key corresponds to one of the keys of the Student interface (i.e., either 'name', 'gpa', or 'classes'). Without this, TypeScript would give an error because key is inferred as string, and indexing student[key] would not be type-safe without the keyof type assertion.
// Breakdown:
// keyof Student: This extracts the union of property names from the Student interface, which are 'name', 'gpa', and 'classes'.
// key as keyof Student: In the for...in loop, key is inferred to be a string (since object keys are always strings), but TypeScript doesn't know that key will always be one of the keys of Student. By using key as keyof Student, you're telling TypeScript that key is definitely one of the keys in the Student interface.
// Accessing properties safely: student[key as keyof Student] ensures that you're accessing the properties of the student object in a type-safe way because TypeScript now understands that key is a valid key of Student, which prevents any potential type errors.
// other usecase
// if we don't know student is of which type then we can give as typeof object
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(student[key]);
};
logStudentKey(student, 'gpa');
// but for the above syntax, we have an issue
// we cannot explicitly define type of a property using the above syntax, like using interfaces we can say that pizza should be a string explicitly
// but for the above syntax, pizza can be number or string, we are not restricting that particularly to a string type
const monthlyincomes = {
    salary: 500,
    bonus: 200,
    sideHustle: 250
    // ddd:33
};
for (const revenue in monthlyincomes) {
    console.log(monthlyincomes[revenue]);
}
