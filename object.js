/*
 + You can understand which is Noun is object: car, house...
 + Object have: attitude, method
 + Object have 'key' and 'value'

 + Use delete object.attitude to  delete attitude

 + Use object.attitude to add or call : object

 + Use object.method = function() to add method
*/

const person = {
  firstName: 'Donal',
  lastName: 'Trump',
  age: 74,
  gender: 'Male',
  vote() {
    return 'He is voting!';
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
// add attitude
person.job = 'President';
// delete attitude
delete person.gender;
// add method:
person.getAge = function getAge() {
  return 74;
};
console.log(person);

console.log(person.getAge()); // get method must method()
