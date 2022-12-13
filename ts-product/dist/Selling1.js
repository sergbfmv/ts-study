"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selling1 = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
const Product_1 = require("./Product");
class Selling1 extends AbstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        return ((this.product.Price - 10) * this.Count);
    }
}
exports.Selling1 = Selling1;
const product1 = new Product_1.Product('water', 35);
const sellingProduct1 = new Selling1(product1, 10);
console.log(sellingProduct1.getPrice());
