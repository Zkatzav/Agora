import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Item extends Component {

  buyItem = () => {
    this.props.buyItem(this.props.item.name)
  }
  changePrice = () => {
    let newPrice = prompt("enter new price", "100")
    this.props.changePrice(this.props.item.name, newPrice)
  }
  render() {
    let item = this.props.item
    console.log(item)
    return (
      <tr onDoubleClick={this.changePrice}>
          <td>{item.name}</td> <td>{item.price}$</td> <td>{item.quantity}</td> 
        <button className="buyItem" onClick={this.buyItem}>Buy</button>
      </tr>
    )
  }
}
export default Item