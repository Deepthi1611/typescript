// enums are used to restrict somebody's choice with values that are offered
// By default enum members(starting from first value) get values stating from 0 and so on but we can also modify them by assigning a value to the enum members 
enum seatChoice {
    AISLE,
    MIDDLE,
    WINDOW
} 

// if we only give AISLE = 10 and then leave then we'll be getting the consecutive numbers as values to the following enum members
enum seatChoice2 {
    AISLE = 10,
    MIDDLE = 20,
    WINDOW = 30
} 

// if we provide string value for any of the member, it cannot calculate the next member's value, 
// in such case we should provide values for next members as well as long as we encounter a number
enum seatChoice3 {
    AISLE = 'AISLE',
    MIDDLE = 'MIDDLE',
    WINDOW = 20,
    FOURTH
} 

const choice = seatChoice.AISLE