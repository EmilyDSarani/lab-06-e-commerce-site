import { renderTable, cartTotal } from './render-table.js';
import { getCart } from '../local-storage-utils.js';
import { musicVinyls } from '../data.js';

const cartFinal = getCart();

const tBody = document.getElementById('body');

for (let item of cartFinal){
    const tr = renderTable(item);
    tBody.append(tr);
}

const total = cartTotal(musicVinyls, cartFinal);

const totalTd = document.querySelector('#wholetotal');
totalTd.textContent = total;