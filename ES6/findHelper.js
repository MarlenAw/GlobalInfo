var users = [
  {name: 'Mark'},
  {name: 'Joe'},
  {name: 'Doe'}
];

/************/
/*** ES5 ***/
/**********/

var user;

for(var i = 0; i < users.length; i++){
  if(users[i].name === 'Joe'){
   user = users[i].name;
 }
}
console.log(user + " - found it using FOR loop");

/************/
/*** ES6 ***/
/**********/

users.find((user) => {
  if(user.name === 'Joe'){
    return console.log(user.name + " - found it using FIND method");
  }
});
