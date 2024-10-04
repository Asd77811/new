//use destructuring to extract values from the following object and array 
//closure 
// object destruction 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  

const { firstName, lastName, age } = person;
console.log(firstName); 
console.log(lastName); 
console.log(age); 


const { lastName: surname } = person;
console.log(surname);
