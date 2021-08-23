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

Start-
Create a folder filled with your product stuff

HTML for Products-
The hard code will be the different parts of the products.
For example, I will be "selling" vinyls for the purpose of this assignment. 
Lets say one of the Vinyls was an ACDC one-
For this I would need:
    <div class="music">
    <h3 class="artist">ACDC Vinyl</h3>
    <img class="cover"src="">
    <p class= "albumn" >Albumn Name</p>
    <p class ="price">$25</p>
I would need to do this basic set up for the others

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