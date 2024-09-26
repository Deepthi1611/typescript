export interface Item {
    id: string
    item: string
    checked: boolean
}

// The underscore (_) prefix before field names, like _id, is a common convention in TypeScript (and other languages like JavaScript) to indicate that the field is private or intended for internal use within the class. 
// While it's not enforced by TypeScript, it serves as a visual cue for developers to differentiate between public properties and private or internal fields.
// The class ListItem implements the Item interface, which requires it to have id, item, and checked properties.
// Even though the class uses private fields with an underscore (_id, _item, _checked), the public getter and setter methods (id, item, and checked) satisfy the interface requirements.
// Therefore, _checked is an internal representation of the checked property defined by the Item interface.
export default class ListItem implements Item {
    constructor(
        private _id: string = "",
        private _item: string = "",
        private _checked: boolean = false
     ) {}

     get id():string {
        return this._id
     }

     set id(id: string) {
        this._id = id
     }

     get item():string {
        return this._item
     }

     set item(item: string) {
        this._item = item
     }

     get checked():boolean {
        return this._checked
     }

     set checked(status: boolean){
        this._checked = status
     }
}