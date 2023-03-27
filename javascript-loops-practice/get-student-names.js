/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name); // name property of students object at first index
  }
  return names;
}
