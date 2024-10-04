//create a funtion counter that returns a function which increments a counter variable.
function createCounter() {
    let count = 0; 
  
    
    return function increment() {
      count += 1;
      return count;
    };
  }
  
  
  const myCounter = createCounter(); 
  console.log(myCounter()); 
  console.log(myCounter());
  console.log(myCounter()); 
  

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


//use destructuring to extract values from the following object and array 
//closure 
// object destruction 
const person = {
    firstName: "ASD",
    lastName: "Shershah",
    age: 19,
  };
  
const { firstName, lastName, age } = person;
console.log(firstName); 
console.log(lastName); 
console.log(age); 

const { lastName: surname } = person;
console.log(surname);
