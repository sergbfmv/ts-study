import { Product } from "./Product";
import { AbstractSelling } from "./AbstractSelling";
import { Selling1 } from "./Selling1";
import { Selling2 } from "./Selling2";

const water: Product = new Product('water', 50)
const book: Product = new Product('book', 400)
const phone: Product = new Product('phone', 80_000)
const pencil: Product = new Product('pencil', 40)
const laptop: Product = new Product('laptop', 115_000)
const juice: Product = new Product('juice', 100)
const bread: Product = new Product('bread', 60)
const cheese: Product = new Product('cheese', 220)

const sell1: Selling1 = new Selling1(water, 100)
const sell2: Selling1 = new Selling1(book, 50)
const sell3: Selling1 = new Selling1(phone, 10)
const sell4: Selling1 = new Selling1(pencil, 500)

const sell5: Selling2 = new Selling2(laptop, 10, 2)
const sell6: Selling2 = new Selling2(juice, 500, 42)
const sell7: Selling2 = new Selling2(bread, 10, 1)
const sell8: Selling2 = new Selling2(cheese, 500, 80)

const products: AbstractSelling[] = [
  sell1,
  sell2,
  sell3,
  sell4,
  sell5,
  sell6,
  sell7,
  sell8,
]

const filterProducts = products.sort((a, b) => {
  if (a.getPrice() > b.getPrice()) {
    return 1
  }
  if (a.getPrice() < b.getPrice()) {
    return -1
  }
  return 0
})

console.log(filterProducts)
