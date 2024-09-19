// interfaces are a way to define the structure of an object, ensuring that any object that implements the interface follows a certain structure.
// They help with type-checking by defining the shape that an object must adhere to, making your code more predictable and reducing errors.
// TypeScript interfaces can only declare method signatures, not provide function definitions (i.e., the actual implementation).
// Interfaces describe the structure of an object or class, specifying what properties and methods it should have, but they do not contain any logic or behavior.
// we can also provide optional properties in interfaces using ?

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory():void
}

// we use implements keyword for interfaces
class Instagram implements TakePhoto {
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    ){
        
    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number,
        public short: string
    ){
        
    }
    createStory(): void {
        console.log('story is created')
    }
}

export {}