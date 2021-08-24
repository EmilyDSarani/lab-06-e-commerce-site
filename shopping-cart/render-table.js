import { findById } from '../utils.js';
import { musicVinyls } from '../data.js';

export function renderTable(cartItem)
{
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement ('td');

    const product = findById(musicVinyls, cartItem.id);
    nameTd.textContent = product.name,
    priceTd.textContent = product.price.toLocaleString('en-US', { style:'currency', currency:'USD' });
    quantityTd.textContent = cartItem.quantity;
    const total = getTotal (product.price, cartItem.quantity);

    totalTd.textContent = total.toLocaleString('en-US', { style:'currency', currency:'USD' });
   
    tr.append(nameTd, priceTd, quantityTd, totalTd);
    
    return tr;

}
function getTotal(price, quantity){
    const total = price * quantity;
    return total;
}

