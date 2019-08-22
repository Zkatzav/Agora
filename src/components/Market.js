import React, { Component } from 'react'
import Item from './Item';
import { observer, inject } from 'mobx-react'


@inject("inventory")
@observer
class Market extends Component {
    constructor() {
        super()
        this.state = {
            newItem: ""
        }
    }
    handleChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({ [name]: value });
    }
    addItem = () => {
        let item = this.state.newItem
        this.props.inventory.addItem(item)
        this.setState({
            newItem: ''
        })
    }
    addItemKey = (e) => {
        if (e.key === "Enter") {
            let itemName = e.target.value
            this.props.inventory.addItem(itemName)
            this.setState({
                newItem: ''
            })
        }
    }
    render() {
        let inventory = this.props.inventory
        return (
            <div id="agora">
                <div><h4>{inventory.numItems} Available items in Agora !</h4></div>
                <div className="logo"><h1>Agora</h1></div>
                <div className="input-item">
                    <input name="newItem" onKeyDown={this.addItemKey} onChange={this.handleChange} value={this.state.newItem} />
                    <button onClick={this.addItem}>Add Item</button>
                </div>
                {this.props.inventory.items.length > 0
                    ? <table>
                        <thead>
                            <tr>
                                <th>Item</th> <th>price</th> <th>Quantity available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.items.map((item, index) =>
                                <Item key={index} item={item} buyItem={inventory.buyItem} changePrice={inventory.changePrice} />)}
                        </tbody>
                    </table> : <div>No items available</div>}
            </div>

        )
    }
}
export default Market
