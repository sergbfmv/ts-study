import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class Selling1 extends AbstractSelling {
  constructor(product: Product, count: number) {
    super(product, count)
  }

  getPrice() {
    return ((this.product.Price - 10) * this.Count)
  }
}

const product1: Product = new Product('water', 35)

const sellingProduct1: Selling1 = new Selling1(product1, 10)

console.log(sellingProduct1.getPrice())