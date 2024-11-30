// export default function cleanSet(set, startString){
//   let modifiedArray = [];

//   for (const value of set) {
//     if (value.startsWith(startString)) {
//       // let newValue = value.slice(startString.length);
//       modifiedArray.push(value.slice(startString.length));
//       // modifiedArray.join('-');
//     } else {
//       return modifiedArray;
//     }
//   return modifiedArray.join('-');
//   }
// }
export default function cleanSet(set, startString="") {
  let modifiedArray = [];

  if (!startString) {
    return "";
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      let newValue = value.slice(startString.length);
      modifiedArray.push(newValue);
    }
  }
  return modifiedArray.join('-');
}
