/*
  + when we have a action or anything again many time,
    we should write 'function'
*/

function sum(a, b) {
  // return a * b;
  console.log(a * b);
}
sum(5, 6);

console.log('----------');

function sumArr(s) {
  let sumA = 0;
  for (let i = 1; i <= s; i += 1) {
    sumA += i;
  }
  return sumA;
}
console.log(sumArr(10));

console.log('------------');
function sayHello(message, name) {
  return `${message} ${name}`;
}
console.log(sayHello('hello', 'cris'));
