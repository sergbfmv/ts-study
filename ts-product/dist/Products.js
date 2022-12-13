"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const Selling1_1 = require("./Selling1");
const Selling2_1 = require("./Selling2");
const water = new Product_1.Product('water', 50);
const book = new Product_1.Product('book', 400);
const phone = new Product_1.Product('phone', 80_000);
const pencil = new Product_1.Product('pencil', 40);
const laptop = new Product_1.Product('laptop', 115_000);
const juice = new Product_1.Product('juice', 100);
const bread = new Product_1.Product('bread', 60);
const cheese = new Product_1.Product('cheese', 220);
const sell1 = new Selling1_1.Selling1(water, 100);
const sell2 = new Selling1_1.Selling1(book, 50);
const sell3 = new Selling1_1.Selling1(phone, 10);
const sell4 = new Selling1_1.Selling1(pencil, 500);
const sell5 = new Selling2_1.Selling2(laptop, 10, 2);
const sell6 = new Selling2_1.Selling2(juice, 500, 42);
const sell7 = new Selling2_1.Selling2(bread, 10, 1);
const sell8 = new Selling2_1.Selling2(cheese, 500, 80);
const products = [
    sell1,
    sell2,
    sell3,
    sell4,
    sell5,
    sell6,
    sell7,
    sell8,
];
const filterProducts = products.sort((a, b) => {
    if (a.getPrice() > b.getPrice()) {
        return 1;
    }
    if (a.getPrice() < b.getPrice()) {
        return -1;
    }
    return 0;
});
console.log(filterProducts);
