"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    role;
    salary;
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    getRole() {
        return this.role;
    }
    get Salary() {
        return this.salary;
    }
    working(personName) {
        return `${personName} сейчас работает как ${this.role}`;
    }
}
exports.Job = Job;
const job1 = new Job('водитель', 25000);
const job2 = new Job('пожарный', 35000);
const job3 = new Job('полицейский', 32000);
console.log(job1.working('Саша'));
console.log(job2.working('Миша'));
console.log(job3.working('Ваня'));
