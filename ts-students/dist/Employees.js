"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("./Users");
class Employees extends Users_1.Users {
}
const employee1 = new Employees();
employee1.add({
    id: 91341,
    firstName: 'Sasha',
    surname: 'Petrov',
    age: 29,
    post: 'frontent-developer'
});
employee1.add({
    id: 92301,
    firstName: 'Misha',
    surname: 'Ivanov',
    age: 27,
    post: 'team-lead'
});
console.log(employee1.get(91341));
console.log(employee1.remove(91341));
