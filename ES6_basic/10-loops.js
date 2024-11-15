function appendToEachArrayValue(array, appendString) {
  arr = []
  index = 0
  for (let index of array) {
    array[index] = appendString + value;
    index = index + 1;
  }
  return array;
}
