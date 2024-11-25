export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, item) => {
    sum += item.id;
    return sum;
  }, 0);
}
