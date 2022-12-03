// this file is the main file and also where we will put our dice-rolling function(s)

export function roll(sides, dice, rolls) {
  // make array to store sum of die for each roll
  let results = [];

  // roll the die the indicated amount
  for (let i = 0; i < rolls; i++) {
    let sum = 0;
    for (let j = 0; j < dice; j++){ // roll all the dice and add num to sum
      let current_roll = Math.floor(Math.random() * sides) + 1;
      sum += current_roll;
    }
    // add sum of all dice for the roll to results
    results.push(sum);
  }

  // build info to return
  let info = {
    sides: sides,
    dice: dice,
    rolls: rolls,
    results: results
  }
  return (info);
}
