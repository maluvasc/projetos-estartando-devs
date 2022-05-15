const person = "Yaguchi Yatora";
const initialSalary = 2000;
const newSalary = 1.18 * initialSalary;
const declareIncomeTax = newSalary >= 3000;
 
console.log("O nome do funcionário é " + person + " e seu novo salário é " + newSalary);
 
console.log(declareIncomeTax ? "E por causa do seu aumento ele deverá declarar seu imposto de renda." : "Mas seu aumento não foi o suficiente para ele declarar imposto de renda.");