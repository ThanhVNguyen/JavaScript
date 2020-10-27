/*
  + Nature of 'constructor' is function to create object
*/
const person = {
  firstName: 'Donal',
  lastName: 'Trump',
  age: 74,
};
console.log(person);

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const p1 = new Person('Fernando', 'Torres', 40);
p1.address = 'American';
console.log(p1);
