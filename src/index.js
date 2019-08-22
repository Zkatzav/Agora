import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Inventory } from './stores/Inventory';
import { Item } from './stores/Item';
import { Provider } from 'mobx-react'


const inventory = new Inventory()
const item = new Item() 
let stores = {inventory, item }
ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
