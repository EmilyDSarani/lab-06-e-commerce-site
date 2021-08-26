//import { renderTable } from './render-table.js';

//const test = QUnit.test;

//test('renderTable should have the right code for HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //const expected = `<tr><td>ACDC</td>$25<td><td>2</td>$50</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    //const actual = renderTable({
     //   id:1,
   //     quantity: 2 });

    //Expect
    // Make assertions about what is expected versus the actual result
    //expect.equal(actual.outerHTML, expected);
//});

//Dani Went over this one in class
import { addTooCart } from '../local-storage-utils.js';

const test = QUnit.test;

test('addtooCart take in id and icrement quantity, if it exists locally', (expect) => {
    
    const cartBefore = [
        { id: 1,
            quantity: 2
  
        },
        { id: 2,
            quantity: 1
      
        },
      
    ];
    
    const cartAfter = [{ id: 1,
        quantity: 2

    },
    { id: 2,
        quantity: 4

    },

    ];


    const stringyCart = JSON.stringify(cartBefore);
    localStorage.setItem ('CART', stringyCart);
    addTooCart (2, 1);
    const actual = JSON.parse (localStorage.getItem('CART'));

    expect.deepEqual(actual, cartAfter);
});

