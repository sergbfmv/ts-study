import { Job } from "./Job";

class Person {
  constructor(name: string)
  constructor(private name: string, private _job?: Job | undefined) {
    this.name = name;
  }

  setJob(_job: Job) {
    this._job = _job
  }

  getSalary() {
    if (this._job) {
      return this._job.Salary
    }
  }

  work(): string {
    if (this._job) {
      return `${this.name} делает работу по професии ${this._job.getRole()}`
    }
    return 'работы нет'
  }
}


const person1: Person = new Person('Миша')
const person2: Person = new Person('Саша')
const person3: Person = new Person('Ваня')

const job1: Job = new Job('полицейский', 25000)
const job2: Job = new Job('водитель', 20000)
const job3: Job = new Job('пожарный', 28000)

person1.setJob(job1)
console.log(person1.work())

person2.setJob(job2)
console.log(person2.work())

person3.setJob(job3)
console.log(person3.work())

