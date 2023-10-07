## Question and answer

Question No: 01 <br>
Question: let greeting;<br>
greetign = {};<br>

console.log(greetign);<br>

Answer: C <br>
answer is undefined.because let is block scope, when declare variable using let this variable can not re-declared.<br>

Question No: 02 <br>
Question: function sum(a, b) {<br>
return a + b;<br>
}<br>
sum(1, "2");<br>

Answer: C <br>
answer is "12" because javascript is a dynamically typed language, when we addition one number and one string javascript are covert two value is string. and show result in string.<br>

Question No: 03 <br>
Question: const food = ["🍕", "🍫", "🥑", "🍔"];<br>
const info = { favoriteFood: food[0] };<br>

info.favoriteFood = "🍝";<br>

console.log(food);<br>

Answer: A <br>
answer is ['🍕', '🍫', '🥑', '🍔'] because here we info variable contain a different variable, info.favouriteFood property does not affect the food array because they are separate variables.<br>

Question No: 04 <br>
Question: function sayHi(name) {<br>
return `Hi there, ${name}`;<br>
}<br>

console.log(sayHi());<br>

Answer: B <br>
answer is Hi there, undefined because return statement return only one line. here this function return Hi there and use comma because this means another line.<br>

Question No: 05 <br>
Question: let count = 0;<br>
const nums = [0, 1, 2, 3];<br>

nums.forEach((num) => {<br>
if (num) count += 1;<br>
});

console.log(count);<br>

Answer: C <br>
answer is 3 because here nums array includes 4 num. in the number 0 is falsy value. when number is true count increases. here one number is false and 3 of number are true so count is 3.<br>
