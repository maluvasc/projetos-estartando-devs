const students = [
  { firstName: "Joao", grades: [5, 7.5, 8, 8, 4.5, 9] },
  { firstName: "Breno", grades: [10, 8.5, 10, 7.5, 9, 6.5] },
  { firstName: "Pedro", grades: [5.5, 8.3, 9.5, 8, 9, 6.9] },
  { firstName: "Fulano", grades: [5.9, 8.5, 4, 8, 9.5, 6] },
  { firstName: "Angelino", grades: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
  { firstName: "Jaja", grades: [10, 4.3, 6.8, 8.25, 9.4, 6] },
  { firstName: "Frederico", grades: [3.5, 8, 10, 8.5, 9, 3.8] },
  { firstName: "Jonatas", grades: [6, 8.5, 8, 6.5, 7, 10] },
  { firstName: "Henrique", grades: [4, 8.2, 5.5, 8.5, 5.4, 6] },
];
const newObject = students.map((student) => {
  const media = student.grades.reduce((prev, value) => prev + value);

  return {
    nome: student.firstName,
    notas: student.grades,
    media: Number((media / student.grades.length).toFixed(1)),

  };
});
console.log(newObject);

for(let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName} teve média ${newObject[i].media}`)
}