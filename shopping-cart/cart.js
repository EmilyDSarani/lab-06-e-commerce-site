import { renderTable, cartTotal } from './render-table.js';
import { cartID } from './cart-data.js';
import { musicVinyls } from '../data.js';

const tBody = document.getElementById('body');

for (let item of cartID){
    const tr = renderTable(item);
    tBody.append(tr);
}

const total = cartTotal(musicVinyls, cartID);

const totalTd = document.querySelector('#wholetotal');
totalTd.textContent = total;