var factorial = (num) => {
    return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
}

console.log(factorial(6));

// var factorial = (num) => {
//     if (num < 0) return "Factorial is not defined for negative numbers";
//     if (num === 0 || num === 1) return 1; // Factorial of 0 or 1 is 1
//     return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
// }

// let userNumber = parseInt(prompt("Enter a number to calculate its factorial:"));
// console.log(`The factorial of ${userNumber} is: ${factorial(userNumber)}`);
