/*

 + string, number, boolean, undefined,
   object, function, array,
 + nature of 'null' is object

 */
const person = {
  name: 'Torres',
  age: 35,
  club: 'Manchester',
};
console.log(person);

function sum(a, b) {
  return a + b;
}
console.log(sum(4, 6));

const a = null;
console.log(typeof (a));

const a1 = true;
console.log(a1);
