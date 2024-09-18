function addTwo(num) {
    return num + 2;
    // return 'hello'
}
var result = addTwo(5);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("lower");
function signUpUser(name, email, password) {
}
signUpUser('Deepthi', 'deepthi@gmail.com', 'Deepthi123');
// default params
var loginUser = function (name, email, password) {
    if (password === void 0) { password = 'Deepthi123'; }
};
loginUser('Deepthi', 'deepthi@gmail.com');
// function getValue(val: number) { 
//     if(val > 5) {
//         return true
//     }
//     return "200 OK"
// }
// getValue(6)
// mentioning return type for arrow functions
var getHello = function () {
    return 'hello';
};
var heroes = ['thor', 'spiderman', 'ironman'];
// type of returning value in map
heroes.map(function (hero) {
    return hero;
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1
}
// return type is never - which is used when we are throwing an error or exception and terminates the program's execution
function handleError(errMsg) {
    throw new Error(errMsg);
}
