var students = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        group: 'T993',
        marks: [2,4,4,5,2,3,3,4,5,3,2,4,3]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Косанов',
        group: 'T993',
        marks: [3,4,5,4,4,1,4,3,4,4,4,3,5]
    },
    {
        firstName: 'Руслан',
        lastName: 'Столбов',
        group: 'T993',
        marks: [3,3,5,4,4,1,4,4,3,5,4,4,4]
    },
    {
        firstName: 'Иван',
        lastName: 'Пробкин',
        group: 'T994',
        marks: [2,3,2,1,2,3,2,3,3,3,4,1,1]
    },
    {
        firstName: 'Владислав',
        lastName: 'Голубев',
        group: 'T994',
        marks: [1,2,2,2,3,2,2,3,5,1,2,3,2]
    }
];

function fullName(object){
    return object.firstName + ' ' + object.lastName;
}

function getAverageMark(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return (sum / array.length).toFixed(1);
}

function processStudents(students){
    students.forEach(function(student){
       alert('Студент ' + fullName(student) + ' имеет средний балл ' + getAverageMark(student.marks) + ' и учится в группе ' + student.group);
    });
}

processStudents(students);