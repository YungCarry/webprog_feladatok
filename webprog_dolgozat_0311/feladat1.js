function getNumberFromString(s) {
  let numbers = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      numbers += s[i];
    }
  }

  return parseInt(numbers);
}

// Tesztelés
console.log("----- 1. feladat -----");
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
