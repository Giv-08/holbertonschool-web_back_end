export default function getLstStudents(student_list, city) {
  return student_list.filter((c) => c.location === city);
}
