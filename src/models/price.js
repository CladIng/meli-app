class Price {

  amount;
  currency;
  decimals;

  constructor(p) {
    this.amount = p ? p.amount : null;
    this.currency = p ? p.currency : null;
    this.decimals = p ? p.decimals : null;
  }
  
  mapPrice(list) {
    let newList = [];
    list.forEach((item) => {
      let newItem = new Price(item);
      newList.push(newItem);
    });
    return newList;
  }
}

export default Price;