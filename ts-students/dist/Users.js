"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    users = [];
    add(user) {
        this.users.push(user);
    }
    remove(id) {
        return this.users.find((user, index) => {
            if (user.id === id) {
                this.users.splice(index, 1);
                return true;
            }
        }) ? true : false;
    }
    get(id) {
        return this.users.find(user => user.id === id) ?? null;
    }
    sorted(type = 'по возрастанию') {
        if (type === 'по возрастанию') {
            this.users.sort((a, b) => a.age - b.age);
        }
        else {
            this.users.sort((a, b) => b.age - a.age);
        }
    }
}
exports.Users = Users;
