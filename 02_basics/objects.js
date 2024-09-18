var user = {
    name: 'deepthi',
    email: 'deepthi@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Deepthi', isPaid: true });
// createUser({name:'Deepthi', isPaid: true, email:'deepthi@gmail.com'}) - this gives error
var myUser = {
    name: 'deepthi',
    isPaid: true,
    email: 'deepthi@gmail.com'
};
createUser(myUser); // this does not give any error which is a bad behavior of objects in TS
// function that returns an object containing name and price 
function createCourse() {
    return { name: 'Deepthi', price: 100 };
}
function createUser2(user) {
    return user;
}
createUser2({ name: 'deepthi', email: "", isActive: true });
// ? stands for optional - here credCardDetails is an optional key of User object
var myUser2 = {
    _id: '1',
    name: 'deepthi',
    email: 'deepthi@gmail.com',
    isActive: false
};
myUser2.email = 'deepthiP@gmail.com';
