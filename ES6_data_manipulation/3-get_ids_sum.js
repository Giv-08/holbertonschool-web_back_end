export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, item) => accumulator + item.id, 0);
}
