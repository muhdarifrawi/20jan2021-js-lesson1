// python function
// def foobar():

function functionName(a,b){
    c = a + b
    console.log(c);
    
}

console.log("total is: ",functionName(12, 10));

// create a function that calculates the area of triangle. 
// The function should only contain the formula for area of triangle
// show the result of the function in the terminal.

function areaOfTriangle(base,height){
    return 0.5*base*height
}

console.log(areaOfTriangle(5,10));


// create a program that would ask user for the cost of item
// it would then put in the value into a function that would calculate the total cost of the item
// inclusive of GST of 7% and a service tax of 3%
const prompt = require("prompt-sync")();
let itemCost = prompt("how much does your item cost? >>> $");

itemCost = parseFloat(itemCost);

function calculateTotal(itemCost){
    let gst = itemCost * 0.7;
    let svcTax = itemCost * 0.3;
    let total = itemCost + gst + svcTax;
    return total;
}

console.log("Total cost is: $", calculateTotal());

// in programming, the numbers won't stop at a specific decinmal places unless specified.
console.log("an example of what happens when a number is divided in a program");
console.log("see here:", 3/0.7);