let processedCars = 0;
let electricCars = 0;
let totalPayment = 0;
let maxPayment = 0;

alert("Максимум 7 автомобілів. Введіть 0 годин для дострокового завершення.\n");

for (let i = 1; i <= 7; i++) {
    let inputHours = +prompt(`Автомобіль №${i}\nВведіть кількість годин стоянки (0 для виходу):`);
    if (inputHours === null) {
        break;
    }
    let hours = inputHours;
    if (hours === 0) {
        alert("Дострокове завершення роботи сервісу.");
        break;
    }
    if (hours < 0 || hours > 12) {
        alert(`Автомобіль №${i}: Некоректна кількість годин.`);
        continue;
    }
    let inputType = prompt(`Автомобіль №${i}\nВведіть тип автомобіля (1 — звичайний, 2 — електромобіль):`);

    if (inputType === null) {
        break;
    }
    let carType = inputType;
    if (carType !== 1 && carType !== 2) {
        alert(`Автомобіль №${i}: Невірний тип автомобіля.`);
        continue;
    }
    let cost = 0;
    if (carType === 1) {
        cost = hours * 40;
    } else {
        cost = hours * 30;
        electricCars++;
    }
    if (hours > 5) {
        cost = cost * 0.8;
    }
    processedCars++;
    totalPayment += cost;

    if (cost > maxPayment) {
        maxPayment = cost;
    }
    console.log(`Автомобіль №${i}: Успішно оброблено. Вартість до сплати: ${cost} грн.`);
}

alert(`ПІДСУМКОВИЙ ЗВІТ ПАРКІНГУ:\n` +
    `Кількість правильно оброблених автомобілів: ${processedCars}\n` +
    `Кількість електромобілів: ${electricCars}\n` +
    `Загальна сума оплати: ${totalPayment} грн\n` +
    `Найбільша оплата за один автомобіль: ${maxPayment} грн`);