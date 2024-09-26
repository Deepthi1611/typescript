import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem):void
    removeItem(id: string):void
}

export default class FullList implements List {
    // creating object for FullList
    // The singleton pattern's primary goal is to ensure that only one instance of a class exists across the entire application, 
    // and that instance can be globally accessed. The static keyword is crucial in achieving this because it allows the class itself (and not individual objects) to store and manage that single instance.
    static instance: FullList = new FullList()
    // there will only be one instance of this class created - we have only one list in our project, to do that we give private keyword for the constructor
    private constructor(
        private _list: ListItem[] = []
    ){}
    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('list')
        if(typeof storedList !== 'string') {
            return
        } else {
           const parsedList: {_id: string, _item: string, _checked: boolean}[] =  JSON.parse(storedList)
           parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
           })
        }
    }

    save(): void {
        // save list to local storage
        localStorage.setItem('list', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id)
        this.save()
    }
}