let age = +prompt("What is your age?")
while (age <= 0) {
    let age = +prompt("What is your age?")
}
price = 0;
let day = +prompt("Який день тижня?")
while (day !== 1 && day !== 2) {
    alert("Неправильний тип дня!")
    let day = prompt("Який день тижня?\n" + "1 — будній\n" + "2 — вихідний")
}
if (day === 1) {
    price = 200;
} else if (day === 1) {
    price = 250;
}
if (age <= 7) {
    price = 0;
} else if (age > 7 && age <= 18) {
    price = price**0.5;
} else if (age > 18 && age <= 59) {
    price = price**1;
} else if (age > 59) {
    price = price**0.6;
}
alert(`Ціна - ${price}грн`)