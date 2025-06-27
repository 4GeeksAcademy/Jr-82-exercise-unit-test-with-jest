const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(1);

    const expected = 1 * 1.07; 

         expect(dollars).toBe(expected); 
})

test("one yen should be .005 pounds", function() {
    const { fromDollarToYen } = require('./app.js');

    const dollars = fromYenToPound(1);

    const expected = 1 * .005; 
    
     expect(dollars).toBe(expected); 
})

test("one dollar should be 144.88 yen", function() {
    const { fromYenToPound } = require('./app.js');

    const dollars = fromDollarToYen(1);

    const expected = 1 * 144.88; 
    
     expect(dollars).toBe(expected); 
})