"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("./Users");
class Students extends Users_1.Users {
}
const student = new Students();
student.add({
    id: 43900,
    firstName: 'Igor',
    surname: 'Malokov',
    age: 19,
    year: 1,
    speciality: 'frontend',
});
student.add({
    id: 43901,
    firstName: 'Vova',
    surname: 'Putin',
    age: 22,
    year: 1,
    speciality: 'frontend',
});
student.add({
    id: 43902,
    firstName: 'Andrey',
    surname: 'Mishin',
    age: 18,
    year: 1,
    speciality: 'frontend',
});
student.add({
    id: 43903,
    firstName: 'Masha',
    surname: 'Petrova',
    age: 23,
    year: 2,
    speciality: 'typescript',
});
student.add({
    id: 43904,
    firstName: 'Sveta',
    surname: 'Malova',
    age: 25,
    year: 2,
    speciality: 'typescript',
});
console.log(student.get(43900));
console.log(student.remove(43904));
