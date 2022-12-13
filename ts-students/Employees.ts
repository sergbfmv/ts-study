import { Users } from "./Users";

interface employee {
  id: number;
  firstName: string;
  surname: string;
  age: number;
  post: string;
}

class Employees extends Users<employee> {}

const employee1 = new Employees()
employee1.add({
  id: 91341,
  firstName: 'Sasha',
  surname: 'Petrov',
  age: 29,
  post: 'frontent-developer'
})
employee1.add({
  id: 92301,
  firstName: 'Misha',
  surname: 'Ivanov',
  age: 27,
  post: 'team-lead'
})

console.log(employee1.get(91341))
console.log(employee1.remove(91341))