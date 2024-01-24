function isSubsequence (string1, string2) {
  // Create pointer variables for both strings
  let index1 = 0;
  let index2 = 0;

  // While within the bounds of first string, check for match in remaining (unchecked) section of second string
  while (index1 < string1.length) {
    // If there is a match found, move to next characters in each string
    if (string1[index1] === string2[index2]) {
      index1 ++;
      index2 ++;
    }
    // If second string exhausted and no match found for any given character in first string, return false
    else if (index2 >= string2.length - 1) {
      return false
    }
    // Else continue searching for first string's current character in second string
    else {
      index2 ++;
    };
  }
  // If all characters of first string found in order in second string, return true
  return true;
}