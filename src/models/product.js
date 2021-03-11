import Price from './price'

class Product {

  id;
  title;
  picture;
  condition;
  freeShipping;
  soldQuantity;
  description;
  price;

  constructor(p) {
    this.id = p ? p.id : null;
    this.title = p ? p.title : null;
    this.picture = p ? p.picture : null;
    this.condition = p ? p.condition : null;
    this.freeShipping = p ? p.free_shipping : null;
    this.soldQuantity = p ? p.sold_quantity : null;
    this.soldQuantity = p ? p.sold_quantity : null;
    this.description = p ? p.description : null;
    this.price = p ? new Price(p.price) : new Price();
  }
  
  mapProducts(list) {
    let newList = [];
    list.forEach((item) => {
      let newItem = new Product(item);
      newList.push(newItem);
    });
    return newList;
  }
}

export default Product;