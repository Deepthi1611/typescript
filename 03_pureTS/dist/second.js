"use strict";
// interfaces are a way to define the structure of an object, ensuring that any object that implements the interface follows a certain structure.
// They help with type-checking by defining the shape that an object must adhere to, making your code more predictable and reducing errors.
// TypeScript interfaces can only declare method signatures, not provide function definitions (i.e., the actual implementation).
// Interfaces describe the structure of an object or class, specifying what properties and methods it should have, but they do not contain any logic or behavior.
// we can also provide optional properties in interfaces using ?
Object.defineProperty(exports, "__esModule", { value: true });
// we use implements keyword for interfaces
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log('story is created');
    }
}
