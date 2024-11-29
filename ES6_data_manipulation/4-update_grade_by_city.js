export default function updateStudentGradeByCity(studentList, city, newGrades = 'N/A') {
  const filteredStudents = studentList.filter(student => {
    return student.location === city;
  });

  const updatedStudents = filteredStudents.map(student => {
    let updatedGrades = newGrades.find((entry) => entry.studentId === student.id)
        if (updatedGrades) {
          student.grade = updatedGrades.grade
        } else {
          student.grade = 'N/A'
        }
      return student; // map() expects a value to be returned for each iteration
    });
  return updatedStudents;
}
