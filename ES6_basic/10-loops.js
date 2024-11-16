export default function appendToEachArrayValue(array, appendString) {
  let new_arr = [];
  let index = 0;
// for in used to enumerate
  for (let value of array) {
    new_arr[index] = appendString + value;
    index = index + 1;
    // console.log(new_arr)
  }
  return new_arr;
}
