var name = 'Zhansaya';
var age = 20;
var married = false;

var person = {};
person.name = name;
person.age = age;
person.married = married;

name = null;
age = null;
married = null;

alert(person.name);
alert(person.age);
alert(person.married);