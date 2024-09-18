"use strict";
// tuples is found only in TS but not in JS
// tuple is a kind of specialised array that is given with some restrictions
Object.defineProperty(exports, "__esModule", { value: true });
// const users: ( string | number )[] = ['one', 'two']
// now I want to restrict the above array that first it should accept string then number then boolean
// for that we use tuple
var user;
user = ['test', 12, true];
// user = ['test', 'test2'] - not allowed - second one should be a number
// last number is optional here which is opacity
var rgb;
rgb = [245, 245, 245];
rgb = [245, 245, 245, 0.5];
// newUser must contain number as first value then string type as second value
var newUser = [1, 'Deepthi'];
// newUser[0] = 'test' - not allowed - as first position should be number
// newUser[1] = 1 - not allowed
// Actually this should not be allowed as user2 type should contain only two elements of type number and string
// this is a kind of loophole in tuples in TS
// we can refer to a stackoverflow blog regarding this
newUser.push(100);
