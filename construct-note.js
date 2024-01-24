function constructNote(msg, letters) {
  // Make frequency counters map for msg and letters
  let msgFC = new Map();
  let lettersFC = new Map();
  for (let char of msg) {
    msgFC[char] = msgFC[char] + 1 || 1;
  }
  for (let char of letters) {
    lettersFC[char] = lettersFC[char] + 1 || 1;
  }
  // Make sure that a) message FC length isn't greater than the letters FC length, b) each key in the message FC is in the letters FC and also that value in the msg FC isn't greater than that of the letters FC
  if (msgFC.size > lettersFC.size) return false;

  for (let key in msgFC) {
    if (!lettersFC[key]) return false;
    if (msgFC[key] > lettersFC[key]) return false;
  }
  return true;
}
