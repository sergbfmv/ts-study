interface userList {
  id: number;
  firstName: string;
  surname: string;
  age: number
}

export abstract class Users<T extends userList> {
  users: T[] = []

  add(user: T): void {
    this.users.push(user)
  }

  remove(id: number): boolean {
    return this.users.find((user, index) => {
      if (user.id === id) {
        this.users.splice(index, 1)
        return true
      }
    }) ? true : false
  }

  get(id: number): T | null {
    return this.users.find(user => user.id === id) ?? null
  }

  sorted(type: string = 'по возрастанию') {
    if (type === 'по возрастанию') {
      this.users.sort((a, b) => a.age - b.age)
    } else {
      this.users.sort((a, b) => b.age - a.age)
    }
  }
}