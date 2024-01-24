function sameFrequency(int1, int2) {
  // Create frequency counter objects for both integers
  let freqCounter1 = {};
  let freqCounter2 = {};

  // Create arrays of the integers' digits 
  let int1Arr = int1.toString().split('');
  let int2Arr = int2.toString().split('');

  // Check that length of both new arrays are the same
  if (int1Arr.length !== int2Arr.length) return false;

  // Add the digits and frequencies of the integers to their object counters
  for (let digit of int1Arr) {
    freqCounter1[digit] = freqCounter1[digit] + 1 || 1;
  }

  for (let digit of int2Arr) {
    freqCounter2[digit] = freqCounter2[digit] + 1 || 1;
  }

  // Check to make sure both objects have the same number of keys
  if (Object.keys(freqCounter1).length !== Object.keys(freqCounter2).length) return false;

  // Check that key-value pairs in first and second FCs match
  for (let digit in freqCounter1) {
    if (freqCounter1[digit] !== freqCounter2[digit]) return false;
  }

  // If all checks are bypassed, return true
  return true;
}