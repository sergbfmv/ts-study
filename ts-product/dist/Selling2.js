"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selling2 = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
const Product_1 = require("./Product");
class Selling2 extends AbstractSelling_1.AbstractSelling {
    countToSale;
    constructor(product, count, countToSale) {
        super(product, count);
        this.countToSale = countToSale;
    }
    getPrice() {
        if (this.Count >= this.countToSale) {
            if (this.product) {
                return ((this.product.Price * this.Count) * (1 - 10 / 100));
            }
        }
        return (this.product.Price * this.Count);
    }
}
exports.Selling2 = Selling2;
const product1 = new Product_1.Product('car', 1_000_000);
const sellingProduct2 = new Selling2(product1, 10, 2);
console.log(sellingProduct2.getPrice());
