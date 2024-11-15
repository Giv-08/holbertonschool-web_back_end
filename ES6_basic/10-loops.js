function appendToEachArrayValue(array, appendString) {
  for (let [index, value] of array.entries()) {
    // var value = array[idx];
    array[index] = appendString + value;
  }
  return array;
}
