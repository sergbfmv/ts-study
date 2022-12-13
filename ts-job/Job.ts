export class Job {
  private role: string;
  private salary: number;

  constructor(role: string, salary?: number)
  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary

  }

  getRole(): string {
    return this.role
  }

  get Salary(): number {
    return this.salary
  }

  public working(personName: string) {
    return `${personName} сейчас работает как ${this.role}`
  }
}



const job1: Job = new Job('водитель', 25000)
const job2: Job = new Job('пожарный', 35000)
const job3: Job = new Job('полицейский', 32000)


console.log(job1.working('Саша'))
console.log(job2.working('Миша'))
console.log(job3.working('Ваня'))
