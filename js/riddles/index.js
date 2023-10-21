// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  // uzupełnij tutaj
  var number2 = String(number).split("");
  number2 = number2.reverse();
  number2 = number2.join("");
  return Number(number2);
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  // uzupełnij tutaj
  let sum = 0;
  for (number in array) {
    if (array[number] % 2 == 0) {
      sum += array[number];
    }
  }
  return sum;
}

console.log("2.", addEven(tab));
