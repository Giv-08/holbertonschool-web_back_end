export default function appendToEachArrayValue(array, appendString) {
  let newArr = [];
  let index = 0;
// for in used to enumerate

  for (const value of array) {
    newArr[index] = appendString + value;
    index += 1;
    // console.log(new_arr)
  }
  return new_arr;
}
