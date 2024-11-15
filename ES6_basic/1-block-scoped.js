export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // scoped only to the `if` block
    let task2 = false; // scoped only to the `if` block
  }

  return [task, task2];
}
