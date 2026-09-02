// alert("hello")
// let age = 18;
// const name = "Ivan";
// console.log(age);
// console.log(name);
// age=19;

// const name = "Ivan";
// let number = 0;
// let isTrue = false;
// console.log(typeof name); //оператор виводить тип данних
//
// // + -
// // * / %
// // **

// const name = prompt("What is your name?");
// let num1=prompt("Введіть перше число");
// let num2=prompt("Введіть друге число");
// console.log(Number(num1)+Number(num2));
// console.log((num1-0)+(num2-0));
//
// let num3 = 100;
// console.log(typeof String(num3));

let productName = prompt("Enter your product name");
let price = Number(prompt("Enter your price"));
let discount = Number(prompt("Enter your discount"));
let quantity = Number(prompt("Enter your quantity"));
let delivery = Number(prompt("Enter your delivery"));

let totalCost = price * quantity(1-0.01discount) + delivery;
console.log(`Загальна вартість за товар ${productName} становить ${totalCost} грн`);
alert("Товар: " + productName + "\nВартість товарів" + totalCost)