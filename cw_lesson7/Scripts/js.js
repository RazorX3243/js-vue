// let prices = [120, 23, 45]
// console.log(prices[1])
// prices[1] = 50;
//
// console.log(prices.length)
//
// let suma = 0;
// for(let i = 0; i<prices.length; i++){
//     console.log(prices[i])
//     suma += prices[i]
// }

// function getTotalPrices(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum;
// }
// let prices = [120, 23, 45, 60, 55];
// let limit = 50;
// let result = getTotalPrices(prices);
// console.log(result);
//
//
// let count = 0;
// function LimPrices(prices) {
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > 50) {
//             count++
//         }
//
//     }
//     return count;
//
// }
//
// let res = LimPrices(prices);
// console.log(res);

let count = +prompt("Скільки чисел введеш?");
let arr = [];

for (let j = 0; j < count; j++) {
    let value = +prompt("Введіть число");
    arr[j] = value;
}
console.log(arr);

let evenNumbers = "";
for (let j = 0; j < count; j++) {
    if (arr[j] % 2 === 0) {
        evenNumbers += arr[j] + " ";
    }
}

console.log(evenNumbers);
