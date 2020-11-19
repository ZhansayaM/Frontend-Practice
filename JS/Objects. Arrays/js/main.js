var grades = [
    {
        name: 'Алексей Попов',
        class: 7,
        marks: [2, 4, 3, 4, 2, 3, 3, 5, 4, 1]
    },
    {
        name: 'Иван Петросян',
        class: 6,
        marks: [3, 2, 4, 4, 3, 5, 5, 5]
    },
    {
        name: 'Василий Караванов',
        class: 8,
        marks: [1, 2, 2, 1, 4, 3, 3, 2]
    }
];
console.log(grades);
grades.push({name: 'Виталий Абрамов', class: 7, marks: [3, 3, 2, 3, 4, 3]});
grades[2].marks.push(5);
console.log(grades[2].marks);
grades[0].marks.pop();
console.log(grades[0].marks);
console.log('У василия ' + grades[2].marks.length + ' оценок');
alert(grades[1].name + ' сейчас в ' + grades[1].class + ' классе');
