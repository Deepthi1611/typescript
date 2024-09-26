import './css/style.css'
import ListItem from './model/ListItem'
import FullList from './model/FullList'
import ListTemplate from './template/ListTemplate'

const initApp = ():void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
  itemEntryForm.addEventListener('submit', (event: SubmitEvent):void => {
    event.preventDefault()
    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    const inputField = document.getElementById('newItem') as HTMLInputElement
    inputField.value = ''
    if(!newEntryText.length) return
    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1
    const newItem = new ListItem(itemId.toString(), newEntryText)
    fullList.addItem(newItem)
    template.render(fullList)
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener('click', ():void => {
    fullList.clearList()
    template.clear()
  })

  fullList.load()
  template.render(fullList)
}

document.addEventListener('DOMContentLoaded',initApp)
// The line document.addEventListener('DOMContentLoaded', initApp) is used in JavaScript to execute a function (in this case, initApp) once the initial HTML document has been completely loaded and parsed by the browser, but before other resources like images, stylesheets, and subframes have finished loading.