## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

Day 1: The Product
Create a folder filled with your product stuff

HTML for Products-
The set up will need to look like this, but instead of this it will need to be put into a JS and rendered and..essentially be working from 3 different JS to make it look and work for HTML
For example, I will be "selling" vinyls for the purpose of this assignment. 
Lets say one of the Vinyls was an ACDC one-
For this I would need:
    <div class="music">
    <h3 class="artist">ACDC Vinyl</h3>
    <img class="cover"src="">
    <p class= "albumn" >Albumn Name</p>
    <p class ="price">$25</p>

Javascript for Skeleton-Products-
Will need to export const musicVinyls=[
    { id:1
    name: "ACDC"
    albumn: "----"
    image: "------"
    price: "$25"
    genre: "Rock" 
    }
]
Then I'll do this another few times

CSS:
I will go through and put borders and style it all.. I am not exactly sure what I want yet...

Day 2: The Cart
Need to create a folder labeled cart. In this folder there needs to be cart-data.js, cart.js, index.html and render-table-rows.js. 

cart-data.js: This will have the array, i think. Like the export const cart= thing that is in the 
cart.js: this is where you import a lot of stuff. Like- the cart-data, render-table, and the data. This is also where I'll code the loops. 
render-table:import the utils and data to this one. This is also where I will....render...the table...like in the render.js. Buuuuut use td, tr instead...then do something with the price and quantity here, probably multiply them. 
index- set up the the table. This table will need to probably have like... the name of the product, the price, how much the user will buy, and the total. Look up a table form online. 

out of the folder, create a utils then pop this code in it that is super important for living:  
export function findById(myArray, id) {
    for (let item of myArray){
      if (item.id === id){
        return item
      }
    }
}
