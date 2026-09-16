// let num = 1;
// while (num<=5) {
//     console.log(num);
//     num ++;
// }

// let userNum = +prompt("Enter your number");
// while (userNum < 1 || userNum > 10) {
//     userNum = +prompt("Error, Enter your number");
// }
// console.log(userNum);

// let age = +prompt("Enter your age number");
// while (Number.isNaN(age) || age <= 0 || age >= 100) {
//     age = +prompt("Enter your age number");
// }
// console.log(age);

// const correctPin = 1234;
// let pin = +prompt("Enter a valid pin");
// i = 1;
// while (i < 4 && pin !== correctPin) {
//     pin = +prompt(`Enter a valid pin, ${4-i} tries left`);
//     i ++;
// }
// if (pin === correctPin) {
//     console.log("Welcome");
// } else {
//     console.log("Account blocked");
// }

// let menuChoise;
// do {
//     menuChoise = prompt("What would you like to do: \n" +
//         "1 - profile \n" + "2 - settings \n" + "3 - exit \n");
//     if (menuChoise === "1") {
//         alert("Entering profile ....")
//     } else if (menuChoise === "2") {
//         alert("Entering settings ....")
//     } else  if (menuChoise === "3") {
//         alert("Exiting ...")
//         break
//     }
// }
// while (menuChoise !== 0);

// let count = 0, sum=0;
// while( count<5){
//     let currentGrade = +prompt(`Enter grade №${count+1}`);
//     if (currentGrade<1 || currentGrade>12 || Number.isNaN(currentGrade)){
//         alert("incorrect grade")
//         continue;
//     }
//     sum += currentGrade;
//     count++
// }
// console.log(sum);
// console.log(sum/count);


// let questionNumber =1;
// let score=1;
// while (questionNumber <= 5){
//     let questions="", answer=""
//     switch(questionNumber){
//         case 1:
//             questions=`Як створити змінну?`;
//             answer='let';
//             break;
//         case 2:
//             questions="Який оператор строгої рівності?";
//             answer="==="
//             break;
//         case 3:
//             questions="Як позначається оператор and?"
//             answer='&&'
//             break;
//         case 4:
//             questions="Як завершити цикл?"
//             answer='break'
//             break;
//         case 5:
//             questions ="Як записати інкремент?"
//             answer='++'
//             break;
//
//     }
//     let answer = prompt(`Ques № ${questionNumber} of 5\n ${questions}`)
//     if (answer === ""){
//         console.log("Answer can't be empty")
//         continue;
//     } else if (answer===answers){
//         alert("Правильно")
//         score++
//     } else {
//         alert("Неправильно")
//     }
//     questionNumber++
// }
// if (score===5){
//     alert("Excellent")
// }
// else if(score>=3){
//     alert("Ok")
// }
// else{
//     alert("Bullshit")
// }

let age = +prompt("What is your age?");
const correctPin = 4321;
i = 1;
while (age <= 12 || age >= 90) {
    age = +prompt("What is your REAL age?");
}
let pin = +prompt("What is your pin?");
while (i < 3 && pin !== correctPin) {
    pin = +prompt(`Enter a valid pin, ${3-i} tries left`);
    i++;
}
if (pin === correctPin) {
    do {
        menuChoise = prompt("What would you like to do: \n" +
            "1 - Особистий кабінет \n" + "2 - Повідомлення \n" + "3 - Налаштування \n" + "0 - Вихід");
        if (menuChoise === "1") {
            alert("Входжу....")
        } else if (menuChoise === "2") {
            alert("Входжу....")
        } else  if (menuChoise === "3") {
            alert("Входжу....")
        } else  if (menuChoise === "0") {
            alert("Виходжу....")
            break;
        }
    }
    while (menuChoise !== "0");
}
else {
    alert("GET OUT!!");
}