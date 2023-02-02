
function rollDice(value) {
  const result = [];
  for (let i = 0; i < value; i++){
    const myRendom = Math.floor(Math.random() * 6);
    result.push(myRendom);
  }
 return result.join(', ');
}
const input= process.argv;
const RollingNumber = input.slice(2);
console.log(`Rolled ${RollingNumber} dice:`, rollDice(RollingNumber));
