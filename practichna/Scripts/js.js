let value = 0;
let overall = 0;
let free = 0;
let lowcost = 0;
let fullprice = 0;
let event = +prompt("Оберіть подію:\n 1 — кіно;\n" + "2 — театр;\n" + "3 — концерт.\n" +
    "Ціни:\n" +
    "кіно — 150 грн;\n" +
    "театр — 220 грн;\n" +
    "концерт — 350 грн.\n")
while (event !== 1 && event !== 2 && event !== 3) {
    event = +prompt("Оберіть подію:\n 1 — кіно;\n" + "2 — театр;\n" + "3 — концерт.\n" +
        "Ціни:\n" +
        "кіно — 150 грн;\n" +
        "театр — 220 грн;\n" +
        "концерт — 350 грн.\n")
}

switch (event) {
    case 1:
        value = 150;
        break;
    case 2:
        value = 220;
    case 3:
        value = 350;
}

let day = prompt("Вкажіть тип дня:")
while (day !== "вихідний" && day !== "будній") {
    day = prompt("Вкажіть тип дня БІГОМ:");
}

let extracost = 1;
if (day === "вихідний") {
    extracost = 1.15
}

let quantity = +prompt("Скільки людей? (1-6)");
while (quantity < 1 || quantity > 6) {
    quantity = +prompt("Скільки людей? (1-6)");
}

for (let i = 1; i <= quantity; i++) {
    age = +prompt(`Скільки років ${i}му учаснику?`)
    if (age >= 0 && age <= 5) {
        free += 1;
        overall = overall + (value**0)
    } else if (age >= 6 && age <= 12) {
        lowcost += 1;
        overall = overall + (value**0.5)
    } else if (age >= 13 && age <= 17) {
        lowcost += 1;
        overall = overall + (value**0.8)
    } else if (age >= 18 && age <= 25) {
        let stud_disc = prompt("Чи є студентський квиток?")
        if (stud_disc === "є") {
            lowcost += 1;
            overall = overall + value*0.9
        } else {
            fullprice += 1;
            overall = overall + value
        }
    } else if (age >= 26 && age <= 59) {
        overall = overall + value
    } else if (age >= 60) {
        lowcost += 1;
        overall = overall + (value**0.75)
    } else if (age === -1) {
        break
    } else {
        alert("Введи нормально, олух")
             i--;
             continue;
    }
}
if (overall > 1000) {
    overall = overall ** 0.95
}
alert(\`Оброблено ${quantity} квитків\\nБезплатних квитків: ${free}\nКвитків зі знижкою: ${lowcost}\nКвитків по повній ціні: ${fullprice}\nЗагальна сума: ${overall}\n`)
