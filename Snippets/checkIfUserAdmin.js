function User(id){
  this.id = id;
}

function generateId(){
  return Math.random() * 999999;
}

function createAdminUser(user){
  user.admin = true
  return user;
}

console.log(createAdminUser(new User(generateId()))); //OUTPUT: User { id: 200291.925838712, admin: true }

//OR  you can call it like that:
const userr = new User(generateId());
console.log(createAdminUser(userr)); //OUTPUT: User { id: 81995.25859212635, admin: true }
