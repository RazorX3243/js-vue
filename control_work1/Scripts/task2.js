let quantity = +prompt("Яка кількість учнів?");
let total_grade = 0
grade_1 = 0
grade_2 = 0
max_grade = 0;
for (let i = 1; i <= quantity; i++) {
    grade = +prompt(`Яка оцінка учня №${i}?`)
    if (grade > 12 || grade < 0) {
        alert("Введи нормально, олух")
        i--;
        continue;
    }
    total_grade = total_grade + grade
    if (grade >= 7) {
        grade_1 += 1
    } else if (grade < 7) {
        grade_2 += 1
    }
    if (grade > max_grade) {
        max_grade = grade
    }
}
let av = total_grade / quantity;
alert(`Результат:\n Сума: ${total_grade}\n
Середня: ${av}\n
Оцінок 7 і вище: ${grade_1}\n
Оцінок нижче 7: ${grade_2}\n
Найбільша оцінка: ${max_grade}`);
