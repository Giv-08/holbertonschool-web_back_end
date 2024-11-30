export default function groceriesList() {
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5
  };

  const modifiedObj = JSON.stringify(obj, null, 2)
    .replace(/": /g, '" => ');

  return modifiedObj;
}
