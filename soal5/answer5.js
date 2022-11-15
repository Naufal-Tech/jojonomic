const obj = {
  'Food': [' sosis', ' nugget'],
  'Drink': [' cola', ' fanta'],
  'Cleaner': ['sunlight', ' rinso'],
  'Tools': [' obeng', ' paku', ' gergaji']
};

let organicBasket = []
let otherBasket = []

for (let item in obj) {
  if (item === 'Food' || item === 'Drink') {
    organicBasket.push(obj[item])
  } else {
    otherBasket.push(obj[item])
  }
}

console.log(`organicBasket : ${organicBasket}`);
console.log(`otherBasket : ${otherBasket}`);