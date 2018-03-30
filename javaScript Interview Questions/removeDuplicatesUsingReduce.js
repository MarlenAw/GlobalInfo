const removeDup = (arr) => {
  return arr.reduce((prev, item) => {
    if(!prev.find((i) => {return i === item})){
      prev.push(item)
    }
    return prev
  }, []);
}

console.log(removeDup([6,8,4,2,4,6,-1,-2,-3,-1])); //OUTPUT: [ 6, 8, 4, 2, -1, -2, -3 ]
