// function appendToEachArrayValue(array, appendString) {
//   for (let [index, value] of array.entries()) {
//     array[index] = appendString + value;
//   }
//   return array;
// }
function appendToEachArrayValue(array, appendString) {
  for (let i in array) {
    array[i] = appendString + array[i];
  }
  return array;
}
