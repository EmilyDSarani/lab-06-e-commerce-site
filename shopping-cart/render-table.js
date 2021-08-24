import { findById } from '../utils';
import { musicVinyls } from '../data';

export function renderTable(cartItem)
{
    const tr = document.createElement('tr');
    const vinylTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quanityTd = document.createElement('td');
    const totalTd = document.createElement ('td');

    const product = findById(musicVinyls, cartItem.id);
    vinylTd.textContent = product.name,
    priceTd.textContent = product.price.toLocaleString('en-US', { style:'currency', currency:'USD' });
    quanityTd.textContent = cartItem.quanity;
    const total = getTotal (product.price * cartItem.quanity);

    totalTd.textContent = total.toLocaleString('en-US', { style:'currency', currency:'USD' });
    tr.append(
        vinylTd,
        priceTd,
        quanityTd,
        totalTd
    );
    return tr;

}
function getTotal(price, quanity){
    const total = price * quanity;
    return total;
}

