const n = 5;
const nString= String(n);
const nnString = nString + nString;
console.log(nnString);
const nnnString = nString + nString + nString;
console.log (nnnString);
const sum = Number(nString) + Number(nnString) + Number(nnnString);
console.log (sum);

/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
