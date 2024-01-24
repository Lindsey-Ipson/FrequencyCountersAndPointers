function countPairs (arr, targetNum) {
  // Create a new set full of the array numbers
  const set = new Set(arr);

  let pairsCount = 0;

  // Iterate over set, checking if number is greater than target number (if so ignore)
  for (let num of set) {
    if (num > targetNum) {
      continue;
    }
    // Calculate the result of the target number minus current number
    let result = targetNum - num;
    
    // Check whether set has that result and that the result is not the same as the current number - if so increment the total pairs count and delete the result number from set so it doesn't get iterated over again
    if (num !== result && set.has(result)) {
      set.delete(result);
      pairsCount ++;
    }
  }
  return pairsCount;
}