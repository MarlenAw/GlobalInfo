//ES6 Generators - Get the name of everyone who works in the company using only one for loop
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Marlen',
  manager: 'John',
  engineer: 'Dave'
};

function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}

const names = [];

for(let name of TeamIterator(engineeringTeam)){
  names.push(name);
}

console.log(names); //OUTPUT: [ 'Marlen', 'John', 'Dave', 'Amanda', 'Bill' ]
