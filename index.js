// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// <<--------------- findMatching --------------->>

function findMatching(arr, name){
   return arr.filter(element => element.toUpperCase() === name.toUpperCase());
}

// <<---------------  fuzzyMatch  --------------->>

function fuzzyMatch(arr, letter){
    return arr.filter(element => element.substring(0,2) === letter)
}

// <<---------------  matchName  --------------->>
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(arr, string){
    return arr.filter( obj => obj.name === string);
}



console.log(matchName(drivers, 'Sally'))
