//calculator using switch cases:

const x = 5;
const y = 6;
switch ('-') {
  case '+':
    console.log(x + y);
    break;
  case '-':
    console.log(x - y);
    break;
    case '*':
      console.log(x*y);
      break;
    case '/':
      console.log(x/y);
      break;
  default:
    console.log('wrong operation' )
}

//calculator using if-else block

const a = 4;
const b = 6;
const operator = "/";
if (operator == "+") {
  console.log(sum of ${a} and ${b} is : ${a + b});
} else if (operator == "-") {
  console.log(subtraction of ${a} and ${b} is : ${a - b});
} else if (operator == "*") {
  console.log(multiplication of ${a} and ${b} is : ${a * b});
} else if (operator == "/") {
  console.log(division of ${a} and ${b} is : ${a / b});
} else {
  console.log("invalid operator");
}