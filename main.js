let numArr = [1, 2, 4, 3, 5, 6, 8, 10, 13, 12, 20];
let toq = 0;
let juft = 0;
for (let i = 0; i < numArr.length; i++) {
  toq += numArr[i] % 2 != 0 ? 1 : 0;
  juft += numArr[i] % 2 != 1 ? 1 : 0;
}

console.log(`Jami: ${toq} ta toq soni mavjud`);
console.log(`Jami: ${juft} ta juft soni mavjud`);
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
  if (numArr[i] % 2 == 0) {
    console.log(numArr[i] + "raqam juft");
  } else {
    console.log(numArr[i] + "raqam toq");
  }
}
