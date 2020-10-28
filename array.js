/*
 + Describe detail anything use object
 + Nature of array is object
 + Check array : Array.isArray() or instanceof Array
*/
const vehicle = ['yamaha', 'honda', 'suzuki'];

vehicle[1] = 'mercedes';
// add a element in end array
vehicle.push('ferrari');
// delete a element in end array
vehicle.pop();
// retrieve element in array
vehicle.slice(0, 1);
console.log(vehicle);
// check a variable is Array???
console.log(Array.isArray(vehicle));

console.log('--------------------');

const car = ['mercedes', 'audi', 'bmw', 'lamborghini'];
car.splice(1, 0, 'ferrari');
console.log(car);

console.log('--------------------');
// merge 2 array use concat
const merge = car.concat(vehicle);
console.log(merge);

console.log('--------------------------------------');
console.log(car);
// sort with alphabet
car.sort();
// use reverse with alphabet
car.reverse();
console.log(car);

console.log('-----------------');
const number = [12, 23, 43, 5, 6, 8];
// sort from value ascending
number.sort((a, b) => a - b);
// find value max, min
const maxNumber = Math.max.apply(null, number);
console.log(maxNumber);

console.log('---------------');
const friend = [
  { name: 'Torres', age: 40 },
  { name: 'Ronal', age: 35 },
  { name: 'Villa', age: 38 },
];
friend.sort((a, b) => -a.age + b.age);
console.log(friend);

console.log('--------------');
const phone = ['apple', 'samsung', 'nokia', 'vivo'];
// use forEach to browser element in array
let name = '';
function getName(value) {
  name += value;
}
phone.forEach(getName);
console.log(name);

console.log('-------------------');
const number1 = [2, 6, 8, 9, 4];
// use map()
function double(value) {
  return value * 2;
}
const a = number1.map(double);
console.log(a);
// use every()
function graterThan(value) {
  return value > 1;
}
const b = number1.every(graterThan);
console.log(b);
// use filter()
function greaterThan(value) {
  return value > 8;
}
const c = number1.filter(greaterThan);
console.log(c);
