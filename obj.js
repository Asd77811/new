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
  