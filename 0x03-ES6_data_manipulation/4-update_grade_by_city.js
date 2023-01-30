export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location.localeCompare(city) === 0)
    .map((b) => {
      const newGrade = newGrades.filter((a) => a.studentId === b.id);
      const student = b;
      if (newGrade.length === 1) student.grade = newGrade[0].grade;
      else student.grade = 'N/A';
      return student;
    });
}
