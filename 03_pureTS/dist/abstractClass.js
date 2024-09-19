"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // this can be over rided in the child classes
    getReelTime() {
        return 8;
    }
}
// we cannot create objects for abstract classes
// we can inherit abstract class to another class and then we can create an object to that class
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // super should be invoked whenever we extend/inherit abstract classes
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log('sepia');
    }
}
const hc = new Instagram('test', 'test', 3);
hc.getReelTime();
