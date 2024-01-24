// edge cases: 
//  - more keys than values to add to the object, keys should have null value
//  - more values than keys to add to the object, ignore extra values

// Reduce Version:

// Use reduce method to go over each element in arr1 and add it as a key in new object
// Set initializer as a new empty object
// If there are no more elements in arr2, made the corresponding keys have null values
// Return new object
function twoArrayObject (arr1, arr2) {
  return arr1.reduce((currObj, key, idx) => {
    currObj[key] = (idx >= arr2.length) ? null : arr2[idx];
    return currObj;
  }, {})
}


// Looping Version:

function twoArrayObjectLonger (arr1, arr2) {
  // Create new object
  let object = {};

  // Create a for loop that checks over the element in that index for both arrays
  // Once that index variable is greater or equal to than the length of the keys array, stop 

  for (let i = 0; i < arr1.length; i++) {
    // get key value
    let key = arr1[i];

  // Once the index variable is greater than the length of the values array, create null values for the rest of key variables
    if (i >= arr2.length) {
      object[key] = null;
    }

  // Else get value and set to key
    else {
      let value = arr2[i];
      object[key] = value;
    }

  }
  // return the new object
  return object;
}
