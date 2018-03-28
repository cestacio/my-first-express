const express = require('express')
const app = express();
const PORT = 3000;

// app.get('/hello/:person', function(request, response, next) {

//     console.log(request.params);
//     console.log(request.query);

//     return response.send(`Hello ${request.params.person}!`);
// })

app.get('/:operation/:num1/:num2', function(request, response, next) {
    let first = +request.params.num1;
    let second = +request.params.num2;
    let sum;

    if (request.params.operation === 'add') sum = first + second;
    else if (request.params.operation === 'subtract') sum = first - second;
    else if (request.params.operation === 'multiply') sum = first * second;
    else if (request.params.operation === 'divide') sum = first / second;

    if (Number.isNaN(result)) {
        return response.status(400).send('oops you made an error');
    }
    return response.send("Your result is: " + sum.toString())
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})

// --------------------------------------------

// Michael's solution:
function solveMath(op, x, y) {
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    };

    return operations[op](x, y);
}

app.get('/:operation/:num1/:num2', (request, response, next) => {
    const num1 = +request.params.num1;
    const num2 = +request.params.num2;

    return response.send(`${solveMath(request.params.operation, num1, num2)}`);
});

// bonus
// add?nums=1,2,3,4,5,6
app.get('/:operation', (request, response, next) => {
    const result = request.query.nums
        .split(',')
        .reduce((a, b) => solveMath(request.params.operation, +a, +b));

    return response.send(`${result}`);
});