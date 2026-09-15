// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }
// for (let i = 10; i >= 1; i -= 2) {
//     console.log(i)
// }

// let sum = 0;
// for (let i = 0; i < 30; i++) {
//     sum += i;
//     console.log(sum);
// }

//Завдання 1//
// let sum = 0;
// for(let i = 0; i <= 50; i+=2) {
//     sum += i;
// }

//Завдання 2//
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i > 20, i % 4 === 0, i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

//Завдання 3//
// let count = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//Завдання 4//
// let student_count = +prompt("What is the student count?");
// if (student_count > 0) {
//     let sum = 0, highlevel = 0, others = 0;
//     for (let i = 1; i <= student_count; i++) {
//         let grade = +prompt("What is the student  grade?");
//         if (!(grade >=1 && grade <= 12)) {
//             alert("Error")
//             i--;
//             continue;
//         }
//         if (grade > 7) {
//             highlevel += 1;
//         } else (grade <= 7) {
//             others += 1;
//         }
//         sum += grade;
//     }
//     console.log(sum);
//     console.log(sum/student_count);
//     console.log(highlevel);
//     console.log(others);
// }

let students = +prompt("Кількість учасників:");
let sum = 0;
let highG = 0;
let midG = 0;
let lowG = 0;
let max = 0;
let min = 100;
let first = 0;

for (let i = 1; i <= students; i++) {
    let grade = +prompt("Введіть оцінку учасника " + i);

    if (grade <= 0 || grade >= 100) {
        alert("Error");
        i--;
        continue;
    }

    sum += grade;

    if (grade >= 90) {
        highG++;
    } else if (grade >= 60) {
        midG++;
    } else {
        lowG++;
    }

    if (grade > max) {
        max = grade;
    }
    if (grade < min) {
        min = grade;
    }

    if (grade === 100 && first === 0) {
        first = i;
    }
}

let avg = sum / students;

console.log("Середній бал:", avg);
console.log("Високі оцінки:", highG);
console.log("Середні оцінки:", midG);
console.log("Низькі оцінки:", lowG);
console.log("Максимальна оцінка:", max);
console.log("Мінімальна оцінка:", min);
console.log("Номер першого зі 100 балами:", first);

