export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // scoped only to the `if` block
    const task2 = false; // scoped only to the `if` block
  }

  return [task, task2];
}
