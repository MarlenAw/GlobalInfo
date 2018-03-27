function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("fhfnvf2t");
var birthday = new Field("10/10/10");

var formFields = [username, password, birthday];

var formIsValid = formFields.every((field) => {
  return field.validate();
});

console.log(formIsValid); //OUTPUT: true

if(formIsValid){
   // allow user to submit
}else{
  // show an error message
}
