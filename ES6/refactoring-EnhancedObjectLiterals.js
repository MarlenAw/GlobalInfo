/**************/
/**** ES5 ****/
/************/
function createBookShop(inventory){
  return{
    inventory: inventory,
    inventoryValue: function(){
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

var inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent Javascript', price: 30}
];

var bookShop = createBookShop(inventory);

console.log(bookShop);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

//OUTPUT:
//{ inventory:
  //  [ { title: 'Harry Potter', price: 10 },
  //    { title: 'Eloquent Javascript', price: 3
  // inventoryValue: [Function: inventoryValue],
  // priceForTitle: [Function: priceForTitle] }
  //40
  //10


  /**************/
  /**** ES6 ****/
  /************/

  const createBookShopp = (inventory) => {
    return{
      inventory,
      inventoryValue(){
        return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle(title){
        return this.inventory.find(book => book.title === title).price;
      }
    };
  }

  const inventoryy = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent Javascript', price: 30}
  ];

  const bookShopp = createBookShopp(inventoryy);

  console.log(bookShopp);
  console.log(bookShopp.inventoryValue());
  console.log(bookShopp.priceForTitle('Harry Potter'));

  //OUTPUT:
  //{ inventory:
    //  [ { title: 'Harry Potter', price: 10 },
    //    { title: 'Eloquent Javascript', price: 3
    // inventoryValue: [Function: inventoryValue],
    // priceForTitle: [Function: priceForTitle] }
    //40
    //10
