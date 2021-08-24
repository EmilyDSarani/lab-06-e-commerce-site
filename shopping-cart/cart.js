import { renderTable } from './render-table.js';
import { cartID } from './cart-data.js';

const tBody = document.getElementById('body');

for (let item of cartID){
    const tr = renderTable(item);
    tBody.append(tr);
}
