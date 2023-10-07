## Question and answer

Question No: 01
Question: let greeting;
greetign = {};

console.log(greetign);

Answer: C
answer is undefined.because let is block scope, when declare variable using let this variable can not re-declared.

Question No: 02
Question: function sum(a, b) {
return a + b;
}

sum(1, "2");

Answer: C
answer is "12" because javascript is a dynamically typed language, when we addition one number and one string javascript are covert two value is string. and show result in string.

Question No: 03
Question: const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

Answer: A
answer is ['🍕', '🍫', '🥑', '🍔'] because here we info variable contain a different variable, info.favouriteFood property does not affect the food array because they are separate variables.

Question No: 04
Question: function sayHi(name) {
return `Hi there, ${name}`;
}

console.log(sayHi());

Answer: B
answer is Hi there, undefined because return statement return only one line. here this function return Hi there and use comma because this means another line.

Question No: 05
Question: let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);

Answer: C
answer is 3 because here nums array includes 4 num. in the number 0 is falsy value. when number is true count increases. here one number is false and 3 of number are true so count is 3.
