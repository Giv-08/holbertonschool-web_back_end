function appendToEachArrayValue(array, appendString) {
  arr = []
  index = 0
  for (const index of array) {
    array[index] = appendString + value;
    index = index + 1;
  }
  return array;
}
