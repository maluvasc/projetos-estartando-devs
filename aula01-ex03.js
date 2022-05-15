const person = "Yaguchi Yatora";
const [firstGrade , secondGrade , thirdGrade] = [10 , 7 , 8];
const media = (firstGrade + secondGrade + thirdGrade) / 3;
const pass = media >= 8;
   
console.log("O nome do aluno é " + person + " e sua média foi " + media);
 
console.log(pass ? "Devido a sua média, o aluno foi aprovado" : "Devido a sua média, o aluno foi reprovado");