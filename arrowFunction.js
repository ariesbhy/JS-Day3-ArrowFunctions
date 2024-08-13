// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet("Basmah"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(10, 50));

// Q3) Write a simple arrow function that squares a number.
const square = (n) => {
  return n * n;
};

console.log(square(5));
