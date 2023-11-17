// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

const neutralise = (s1: string, s2: string) => {
  // Check if the lengths of the strings are the same
  if (s1.length != s2.length) {
    return 'Both length must be equal';
  }

  // Initialize an empty result string
  let res = '';

  // Loop through each character in the strings
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === '+' && s2[i] === '+') {
      res += '+';
    } else if (s1[i] === '-' && s2[i] === '-') {
      res += '-';
    } else {
      res += '0';
    }
  }

  return res;
};

neutralise('--++--', '++--++');
neutralise('-+-+-+', '-+-+-+');
