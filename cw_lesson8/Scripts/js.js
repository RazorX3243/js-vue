// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// names.pop();
// names.unshift("Pavlo");
// names.shift();
//
// let names2 = names.slice(1, 3);
//
// console.log(names);
// console.log(names2);
//
// let deleted = names.splice(2, 1);
// console.log(deleted);
//
// names.splice(1, 0, "Seva");
// names.splice(0, 1, "Tetiana", "Nadiia");
// console.log(names);

// function register(name) {
//     if (name.trim() === "") {
//         alert("Please enter your name");
//         return;
//     }
//     let exists = false;
//     for (let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             exists = true;
//         }
//     }
//     if (exists) {
//         alert("Учасник вже зареєстрований " + name);
//         return;
//     }
//     event.push(name);
//     alert(`Зареєстровано учасника: ${name}`);
// }
// function remove(name) {
//     let index = -1
//     for (let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             index = i;
//             break
//         }
//     }
//     if (index === -1) {
//         alert("Такого учасника немає")
//     }
//     else{
//         event.splice(index, 1);
//         alert("Учасника видалено")
//     }
//
//
//
//
// }
// function count(){
//     alert(`Всього учасників: ${event.length}`);
// }
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
//
//
// register("Slavik");
// register("Ann");
// register("        ");
// remove("Slavik");
// count();


// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];

// for (let i = 0; i < event.length; i++) {
//     console.log(event[i]);
// }

// for(let name of names) {
//     console.log(name);
// }

// names.forEach(function (name,index){
//     console.log(name, index);
// })


////////////
//Homework//
////////////

// ЗАДАЧА 1

// let queue = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
//
// queue.push("Влад");        // 1) у кінець
// queue.unshift("Всеволод"); // 2) на початок
// queue.pop();               // 3) видалити останнього
// queue[2] = "Єгор";         // 4) заміна за індексом 2
//
// // 5) імена з номерами через for
// for (let j = 0; j < queue.length; j++) {
//     console.log(j + 1, queue[j]);
// }
//
// // 6) імена через for...of
// for (let person of queue) {
//     console.log(person);
// }
//
// // 7) довжина кожного імені через forEach
// queue.forEach(function(person) {
//     console.log(person, person.length);
// });

// ЗАДАЧА 2.
let ticketPrices = [120, 250, 180, 300, 150, 400];

// Спосіб 1:
let total1 = 0;
let expensive1 = 0;
for (let price of ticketPrices) {
    total1 += price;
    if (price >= 200) {
        expensive1++;
    }
}
console.log("for...of:", total1, expensive1);

// Спосіб 2:
// let total2 = 0;
// let expensive2 = 0;
// ticketPrices.forEach(function(price) {
//     total2 += price;
//     if (price >= 200) {
//         expensive2++;
//     }
// });
// console.log("forEach:", total2, expensive2);

let averagePrice = total1 / ticketPrices.length;
console.log("Середня ціна:", averagePrice);