"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    Product;
    count;
    constructor(Product, count) {
        this.Product = Product;
        this.count = count;
    }
    set Count(count) {
        this.count = count;
    }
    get Count() {
        return this.count;
    }
    set product(Product) {
        this.Product = Product;
    }
    get product() {
        if (this.Product) {
            return this.Product;
        }
        return this.Product;
    }
    compare(a, b) {
        if (a.getPrice() > b.getPrice())
            return 1;
        if (a.getPrice() < b.getPrice())
            return -1;
        return 0;
    }
}
exports.AbstractSelling = AbstractSelling;
