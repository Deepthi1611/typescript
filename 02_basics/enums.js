// enums are used to restrict somebody's choice with values that are offered
// By default enum members(starting from first value) get values stating from 0 and so on but we can also modify them by assigning a value to the enum members 
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
})(seatChoice || (seatChoice = {}));
// if we only give AISLE = 10 and then leave then we'll be getting the consecutive numbers as values to the following enum members
var seatChoice2;
(function (seatChoice2) {
    seatChoice2[seatChoice2["AISLE"] = 10] = "AISLE";
    seatChoice2[seatChoice2["MIDDLE"] = 20] = "MIDDLE";
    seatChoice2[seatChoice2["WINDOW"] = 30] = "WINDOW";
})(seatChoice2 || (seatChoice2 = {}));
// if we provide string value for any of the member, it cannot calculate the next member's value, 
// in such case we should provide values for next members as well as long as we encounter a number
var seatChoice3;
(function (seatChoice3) {
    seatChoice3["AISLE"] = "AISLE";
    seatChoice3["MIDDLE"] = "MIDDLE";
    seatChoice3[seatChoice3["WINDOW"] = 20] = "WINDOW";
    seatChoice3[seatChoice3["FOURTH"] = 21] = "FOURTH";
})(seatChoice3 || (seatChoice3 = {}));
var choice = seatChoice.AISLE;
