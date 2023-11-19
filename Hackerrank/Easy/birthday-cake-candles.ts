/** You are in charge of the cake for a child's birthday.
  You have decided the cake will have one candle for each year of their total age.
  They will only be able to blow out the tallest of the candles. Count how many candles are tallest. 
Example
candles = [4,4,1,2]
The maximum height candles are 4 units high. There are 2 of them, so return 2.
  */
function birthdayCakeCandles(candles: number[]) {
  let max = candles[0];
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }
  return count;
}

function birthdayCakeCandles1(candles: number[]) {
  return candles.filter((candle) => candle === Math.max(...candles)).length;
}
