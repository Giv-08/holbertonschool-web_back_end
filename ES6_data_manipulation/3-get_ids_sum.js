export default function getStudentIdsSum(studentList) {
  studentList.reduce((sum, item) => {
    sum += item.id;
  }, 0);
}
