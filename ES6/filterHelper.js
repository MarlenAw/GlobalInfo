var products = [
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
];

/************/
/*** ES5 ***/
/**********/

var filteredProducts = [];

for(var i = 0; i < products.length; i++){
  if(products[i].type === 'fruit'){
    filteredProducts.push(products[i].name);
  }
}
console.log(filteredProducts.join(" and ")); //output: banana and orange



/************/
/*** ES6 ***/
/**********/

products.filter((product) => { //filter method returns only truthy or falsy
    if(product.type === 'fruit'){
      return console.log(product.name);  //output: banana orange
    }
});
