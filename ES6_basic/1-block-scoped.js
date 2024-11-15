export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true; // scoped only to the `if` block
    let task2 = false; // scoped only to the `if` block
  }

  return [task, task2];
}
