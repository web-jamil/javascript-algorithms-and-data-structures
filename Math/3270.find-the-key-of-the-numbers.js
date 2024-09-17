// 3270. Find the Key of the Numbers
// 3270. Find the Key of the Numbers
// You are given three positive integers num1, num2, and num3.
// The key of num1, num2, and num3 is defined as a four-digit number such that:
  // Initially, if any number has less than four digits, it is padded with leading zeros.
  // The ith digit (1 <= i <= 4) of the key is generated by taking the smallest digit among the ith digits of num1, num2, and num3.
// Return the key of the three numbers without leading zeros (if any).


// Solution: 

// For each digit, divide each number by 10^i and use % 10 to get the digit at the index.
// Find the minimum digit and add it to the key.

// Time Complexity: O(1) 78ms
// Space Complexity: O(1) 51.7MB
function generateKey(num1, num2, num3) {
  let key = 0;
  for (let i = 0; i < 4; i++) {
    let pow = 10 ** i;
    let digit1 = Math.floor(num1 / pow) % 10;
    let digit2 = Math.floor(num2 / pow) % 10;
    let digit3 = Math.floor(num3 / pow) % 10;
    key += (pow * Math.min(digit1, digit2, digit3));
  }
  return key;
};

// Three test cases
console.log(generateKey(1, 10, 1000)) // 0
console.log(generateKey(987, 879, 798)) // 777
console.log(generateKey(1, 2, 3)) // 1