// this file is the main file and also where we will put our dice-rolling function(s)

export function roll(sides, num_dice, times_rolled) {
  // make array to store sum of die for each roll
  let results = [];

  // roll the die the indicated amount
  for (let i = 0; i < times_rolled; i++) {
    let sum = 0;
    for (let j = 0; j < num_dice; j++){ // roll all the dice and add num to sum
      let current_roll = Math.floor(Math.random() * sides) + 1;
      sum += current_roll;
    }
    // add sum of all dice for the roll to results
    results.push(sum);
  }

  // build info to return
  let info = {
    sides: sides,
    dice: num_dice,
    rolls: times_rolled,
    results: results
  }
  return (info);
}
