//EXERCÍCIO EXTRA 2

let chosenString = "dead apple";
let size = chosenString.length;
let result = "";
let vowelNum = 0;

function makeReport() {
  for (index = size; index > -1; index--) {
    let letters = chosenString.charAt(index);
    result = result + letters;
  }
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
    result: `Inverso da string é ${result}`,
    num: `O número de vogais é ${vowelNum}`,
  };
}

if (typeof chosenString === "string") {
  console.log(`A string escolhida é ${chosenString}`);
  console.log(makeReport());
} else {
  console.log("oh carai");
}
