//EXERCÍCIO 2

let chosenString = "sunshine";
let vowelNum = 0;
let size = chosenString.length;

function countNumberOfVowels() {
  for (index = 0; index <= size; index++) {
    switch (chosenString[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        vowelNum++;
        break;
    }
  }
  return {
    num: `O número de vogais é ${vowelNum}`,
  };
}
console.log(countNumberOfVowels());
