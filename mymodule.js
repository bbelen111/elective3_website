const fullnames=['brendon', 'james', 'sarah', 'linda'];
const ages = [25, 30, 22, 28];
const courses = ['Math', 'Science', 'History', 'Art'];

const students = [
    { name: fullnames[0], age: ages[0], course: courses[0] },
    { name: fullnames[1], age: ages[1], course: courses[1] },
    { name: fullnames[2], age: ages[2], course: courses[2] },
    { name: fullnames[3], age: ages[3], course: courses[3] },
]

const hello = function(name) {
    return (`Hello ${name}!`);
}
// console.log(students);
module.exports = {students, fullnames, ages, courses, hello};