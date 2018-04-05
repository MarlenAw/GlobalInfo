var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

/************/
/*** ES5 ***/
/**********/

function fileSummery(file){
  return 'The size of ' + file.name + '.' + file.extension + ' is ' + file.size;
}
console.log(fileSummery(savedFile)); //OUTPUT: The size of repost.jpg is 14040


/************/
/*** ES6 ***/
/**********/

function fileSummery({ extension, name, size }){
  return `The size of ${name}.${extension} is ${size}`;
}
console.log(fileSummery(savedFile)); //OUTPUT: The size of repost.jpg is 14040
