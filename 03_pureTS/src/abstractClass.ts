// abstract class
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}
    abstract getSepia():void
    // this can be over rided in the child classes
    getReelTime():number {
        return 8
    }
}
// we cannot create objects for abstract classes
// we can inherit abstract class to another class and then we can create an object to that class
class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, burst: number){
        // super should be invoked whenever we extend/inherit abstract classes
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log('sepia')
    }
}

const hc = new Instagram('test', 'test', 3)
hc.getReelTime()

export {}