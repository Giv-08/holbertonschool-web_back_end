export default function appendToEachArrayValue(array, appendString) {
  let newArr = [];
  let index = 0;

  for (const value of array) {
    newArr[index] = appendString + value;
    index += 1;
  }

  return newArrr;
}
