//EXERCÍCIO 1

let chosenString = "lily";
let size = chosenString.length;
let result = "";

function invert() {
  for (index = size; index > -1; index--) {
    let letters = chosenString.charAt(index);
    result = result + letters;
  }
}
invert();
console.log(`O inverso da string escolhida é ${result}.`);
