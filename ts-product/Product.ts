export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name,
    this.price = price    
  }

  set Price(price: number) {
    this.price = price
  }

  get Price() {
    return this.price
  }

  set Name(name: string) {
    this.name = name
  }

  get Name() {
    return this.name
  }
}

