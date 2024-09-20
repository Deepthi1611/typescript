"use strict";
// in operator in Arrowing
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return 'fish food';
    }
    return 'bird food';
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    // return shape.side * shape.side
}
// never type
// we added default case as never so that even if in the future if any other interface gets added, 
// we will be getting an error to add that interface in the switch case as well so that the code is scalable
// we made default as never because we are not supposed to run it and we should have case for each case
function getArea2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        default:
            const defaultForArea = shape;
            return defaultForArea;
    }
}
