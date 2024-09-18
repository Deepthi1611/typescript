// union is like a combination of two or more types of data that can be included into a variable
// union is similar to any - it recommended to use union over any
// score can be number or string - it can allow both datatypes
var score = 33;
score = '55';
var myName = {
    name: 'Deepthi',
    id: 1
};
function getDbId(id) {
    // id.toLowerCase() - we cannot directly use this as number can also be a type of id
    // if we want to use the methods then we should add conditional checking for this
}
// data can be either an array of numbers or an array of strings but not both
var data = [1, 23, 45];
// this accepts both numbers and strings in the same array however this approach is not much recommended
var data2 = [1, 2, '4'];
// pi can have only 3.14 value that is mentioned here
var pi = 3.14;
// pi = 3.145 - not allowed
// seatAllotment can have only three values that are mentioned below
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'crew' - not allowed
