import { renderTable, cartTotal } from './render-table.js';
import { getCart, clearCart } from '../local-storage-utils.js';
import { musicVinyls } from '../data.js';

const cartFinal = getCart();

const tBody = document.getElementById('body');

for (let item of cartFinal){
    const tr = renderTable(item);
    tBody.append(tr);
}

const total = cartTotal(musicVinyls, cartFinal);
const button = document.querySelector('#checkout');
const totalTd = document.querySelector('#wholetotal');
totalTd.textContent = total;

button.addEventListener('click', () => {
    clearCart();
});