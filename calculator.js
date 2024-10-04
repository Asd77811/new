function calculator(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
       
    }
}


console.log(calculator('+', 2, 3));
console.log(calculator('-', 5, 2)); 
console.log(calculator('*', 4, 6)); 
console.log(calculator('/', 10, 2)); 
