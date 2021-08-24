import { renderTable } from './render-table';
import { cartID } from './cart-data';

const tBody = document.querySelector('body');

for (let item of cartID){
    const tr = renderTable(item);
    tBody.append(tr);
}
