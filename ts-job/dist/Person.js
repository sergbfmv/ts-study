"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = require("./Job");
class Person {
    name;
    _job;
    constructor(name, _job) {
        this.name = name;
        this._job = _job;
        this.name = name;
    }
    setJob(_job) {
        this._job = _job;
    }
    getSalary() {
        if (this._job) {
            return this._job.Salary;
        }
    }
    work() {
        if (this._job) {
            return `${this.name} делает работу по професии ${this._job.getRole()}`;
        }
        return 'работы нет';
    }
}
const person1 = new Person('Миша');
const person2 = new Person('Саша');
const person3 = new Person('Ваня');
const job1 = new Job_1.Job('полицейский', 25000);
const job2 = new Job_1.Job('водитель', 20000);
const job3 = new Job_1.Job('пожарный', 28000);
person1.setJob(job1);
console.log(person1.work());
person2.setJob(job2);
console.log(person2.work());
person3.setJob(job3);
console.log(person3.work());
