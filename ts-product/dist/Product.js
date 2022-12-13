"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name,
            this.price = price;
    }
    set Price(price) {
        this.price = price;
    }
    get Price() {
        return this.price;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
}
exports.Product = Product;
