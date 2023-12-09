/**
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
Given the signal received by Earth as a string, s , determine how many letters of the SOS message have been changed by radiation.
 */
function marsExploration(s) {
  // Write your code here
  const target = 'SOS';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== target[i % 3]) {
      count++;
    }
  }

  return count;
}
