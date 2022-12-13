import { Product } from "./Product"

export abstract class AbstractSelling {
  private Product: Product
  private count: number

  constructor(Product: Product ,count: number) {
    this.Product = Product
    this.count = count
  }

  set Count(count: number) {
    this.count = count
  }

  get Count() {
    return this.count
  }

  set product(Product: Product) {
    this.Product = Product
  }

  get product() {
    if (this.Product) {
      return this.Product
    }
    return this.Product
  }

  abstract getPrice(): number 

  compare(a: AbstractSelling, b: AbstractSelling) {
    if (a.getPrice() > b.getPrice())
      return 1;
    if (a.getPrice() < b.getPrice())
      return -1;
    return 0;
  }
}