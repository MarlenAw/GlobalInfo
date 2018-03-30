var desks = [
  {type: 'sitting'},
  {type: 'standing'},
  {type: 'sitting'},
  {type: 'sitting'},
  {type: 'standing'},
  {type: 'standing'}
];

var deskTypes = desks.reduce((prev, desk) => {
  if(desk.type === 'sitting'){
    prev.sitting++
  }if(desk.type === 'standing'){
    prev.standing++
  }
  return prev;
}, {sitting: 0, standing: 0});


console.log(deskTypes); //OUTPUT: { sitting: 3, standing: 3 }
