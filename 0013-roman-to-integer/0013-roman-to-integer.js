const romansObj = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

var romanToInt = function(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romansObj[s[i]];
    const next = romansObj[s[i+1]];
    if (next > current) {
        total += next - current;
        i++;
    } else {
        total += current;
    }
  }
   
  return total;
};
