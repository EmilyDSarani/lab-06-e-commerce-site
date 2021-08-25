import { findById } from './utils.js';

const CART = 'CART';

export function getCart(){
    const stringyCart = localStorage.getItem(CART);
    if (!stringyCart){
        return [];
    } 
    const finalCart = JSON.parse(stringyCart);
    return finalCart;

}

export function setCart(cartArray){
    const stringyCart = JSON.stringify(cartArray);
    localStorage.setItem(CART, stringyCart);

}
export function addTooCart(someId){
    const currentCart = getCart();
    const productCart = findById(currentCart, someId);
    if (productCart){
        productCart.quantity++;
    } else {
        const newItems = { id: someId, quantity: 1 };
        currentCart.push(newItems);
    
    }
    setCart(currentCart);
}

