import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class Selling2 extends AbstractSelling {
  countToSale: number
  constructor(product: Product, count: number, countToSale: number) {
    super(product, count)
    this.countToSale = countToSale
  }

  getPrice() {
    if (this.Count >= this.countToSale) {
      if (this.product) {
        return ((this.product.Price * this.Count) * (1 - 10/100))
      }

    }
    return (this.product.Price * this.Count)
  }
}

const product1: Product = new Product('car', 1_000_000)

const sellingProduct2: Selling2 = new Selling2(product1, 10, 2)

console.log(sellingProduct2.getPrice())