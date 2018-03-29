var arr = [3,2,5,4,1,7,8,5,9];
var sort;

function bubbly(ar){
  sort = false;
  var end = ar.length

  for(var i = 0; i < end; i++){
    if(ar[i] > ar[i+1]){
      sort = true;
      var temp = ar[i];
      ar[i] = ar[i+1];
      ar[i+1] = temp;
    }
  }
  end--
}

do{
  bubbly(arr)
}while(sort);

console.log(arr);
