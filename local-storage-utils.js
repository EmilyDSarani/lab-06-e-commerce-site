import { findById } from './utils.js';
//please note that local storage only knows strings. That is why we have to go through this procress to turn an array into a string the back. 
const CART = 'CART';

export function getCart(){
    const stringyCart = localStorage.getItem(CART);
    if (!stringyCart){
        return [];
    } 
    const finalCart = JSON.parse(stringyCart);
    return finalCart;
//this will allow us to get the name of whatever information we are about to ask for. 
//in this case, it is going to go to the cart.js, this will loop through the cart in order to help the HTML to read the local storage. 
//JSON.parse is turning the string objects back into JS objects. 
// this will also be imported to cart.js for the cart to be able to read the type of objects and how many objects there are in the cart. 
}

export function setCart(cartArray){
    const stringyCart = JSON.stringify(cartArray);
    localStorage.setItem(CART, stringyCart);
// this is the items we will refer to when we need to get it. 
//JSON.stringify is turning the object intro a string. It injects it into the storage. 
// this will export down to the add button because, i think this is translating the getCart function to the addCart function.
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
//In this process we are using both of the functions. This is the...loop? conditions? 
//we take the getCart, which is what we used to go from string to JS objects and we are taking it through the storage so that when the user
//clicks the 'add item' from the button we created in the vinyl-render page, then it will add how ever many of that item the user clicks
// and take it through the storage. The setCart will read the currentCart and translate it for the button to work on a different html index. 
