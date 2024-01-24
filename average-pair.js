function averagePair (arr, avg) {
  // Create pointers for left and right sides of the array (start them at 0 & array length - 1)
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  // Compare the average of the elements of the 2 pointers
  while (leftPointer < rightPointer) {
    let currentAvg = (arr[leftPointer] + arr[rightPointer]) / 2;
    if (currentAvg === avg) return true;
    // If current avg is greater than target avg, move the right pointer to the left
    if (currentAvg > avg) rightPointer --;
    // If current avg is less than than target avg, move the left pointer to the right
    if (currentAvg < avg) leftPointer ++;
  }

  // Once the left pointer is greater than the right pointer, return false
  return false;
}
