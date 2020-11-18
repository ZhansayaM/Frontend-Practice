var person1 = {
    name: 'Alex',
    age: 20,
    married: true,
    children: 3
};
var person2 = {
    name: 'Sonya',
    age: 25,
    married: false,
    children: 0
};
var person3 = {
    name: 'Sam',
    age: 35,
    married: true,
    children: 1
};

var names = person1.name + ', ' + person2.name + ', ' + person3.name;
var averageAge = (person1.age + person2.age + person3.age) / 3;
var atLeastOneMarried = person1.married || person2.married || person3.married;
var allYoungerThanForty = person1.age < 40 && person2.age < 40 && person3.age < 40;
var atLeastOneHasNoChildren = person1.children == 0 || person2.children == 0 || person3.children == 0;
alert('Names of staff - ' + names);
alert('Average age of staff - ' + averageAge);
alert('At least one married? - ' + atLeastOneMarried);
alert('Are all of them younger than 40? -  ' + allYoungerThanForty);
alert('Is there at least 1 that has no children? - ' + atLeastOneHasNoChildren);
