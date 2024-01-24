function separatePositive (arr) {
  debugger;
  // Create two pointer variables
  let left = 0;
  let right = arr.length - 1;

  // Start at the first element and last element, moving inward
  // Once left point is greater than or equal to than the right pointer, stop
  while (left < right) {
    let leftInt = arr[left];
    let rightInt = arr[right];

    // Check if both integers are in the correct position and don't need to be switched
    if (leftInt > 0 && rightInt < 0) {
      left ++;
      right --;
    }

    // Check if both integers need to be switched -- if so switch them and move both pointers inward
    if (leftInt < 0 && rightInt > 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left ++;
      right --;
    }
    // If just left integer needs to switch, keep left pointer, and move right pointer inward until there's a right hand integer that needs to be switched
    if (leftInt < 0 && rightInt < 0) {
      right --;
    }
    // If just right integer needs to switch, keep right pointer, and move left pointer inward until there's a left hand integer that needs to be switched
    if (rightInt > 0 && leftInt > 0) {
      left ++;
    }
  }
  return arr;
}