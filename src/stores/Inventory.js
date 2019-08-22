import { observable, action, computed } from 'mobx'
import { Item } from './Item'


export class Inventory {

  @observable items = [];

  @computed get numItems() {
    let counter = 0
    this.items.forEach(i => counter += i.quantity)
    return counter
  } 

  @action addItem = (name, price = 0, quantity = 1) => {
    this.items.find(i => i.name === name)
      ? this.items.find(i => i.name === name).quantity++
      : this.items.push(new Item(name, price, quantity))
  }
  @action buyItem = (name) => {
    let item = this.items.find(i => i.name === name)
    item.quantity--
    if (item.quantity === 0) {
      let itemIndex = this.items.indexOf(name)
      this.items.splice(itemIndex, 1)
    }
  }
  @action changePrice = (name, price) => {
    this.items.find(i => i.name === name).price = price
  }
}