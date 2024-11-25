export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, item) => {
    return accumulator + item.id;
  }, 0);
}
