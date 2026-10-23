// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: "1840",
//     price: 500,
//     available: true,
// }

// console.log(book.title);
//console.log(book[0]);

// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: "1840",
//         price: 500,
//         available: true
//     },
//     {
//         id: 2,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: "1840",
//         price: 550,
//         available: true
//     },
//     {
//         id: 3,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: "1927",
//         price: 450,
//         available: false
//     }
// ];

// console.log(books[2]);
// for (let book of books) {
//     console.log(`[${book.id}]: ${book.title}, ${book.author}, ${book.year}, ${book.price}, ${book.available}, ${book.available}, ${book.price}`);
// }
// books.forEach(function (book){
//     console.log(book.title);
// })
//
// let availableCount = 0;
// let totalPrice = 0;
// for (let book of books) {
//     if (book.available === true) {
//         availableCount++;
//         totalPrice += book.price;
//     }
// }
// console.log(availableCount);
// console.log(totalPrice);
//
// books.push({
//     id: 4,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: "1882",
//     price: 500,
//     available: true
// });

// console.log(books.length);
// let idBooks = +prompt("Введіть ід книги: ");
// let foundBook = null;
// for (let book of books) {
//     if (book.id === idBooks) {
//         foundBook = book;
//         break;
//     }
// }

// if (foundBook !== null) {
//     let status = "Немає у наявності";
//     if (foundBook.available === true) {
//         status = "У наявності";
//     }
//     alert(`${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.price} грн, ${status}`);
// } else {
//     alert("Книжки немає з таким ід");
// }


//////////////////////////////////////////////////////
///////////////////////Homework///////////////////////
//////////////////////////////////////////////////////

let clubs = [
    {
        id: 1,
        name: "Програмування",
        category: "IT",
        price: 700,
        members: 11,
        active: true
    },
    {
        id: 2,
        name: "Робототехніка",
        category: "IT",
        price: 800,
        members: 7,
        active: false
    },
    {
        id: 3,
        name: "Баскетбол",
        category: "Спорт",
        price: 380,
        members: 15,
        active: true
    },
    {
        id: 4,
        name: "Плавання",
        category: "Спорт",
        price: 500,
        members: 20,
        active: false
    },
    {
        id: 5,
        name: "Театр",
        category: "Мистецтво",
        price: 450,
        members: 8,
        active: true
    }
];

let option;
let searchId;
let currentClub;
let recruitment;

do {
    option = +prompt("Каталог гуртків\n\n" + "1 - Показати всі гуртки\n" + "2 - Знайти гурток за ID\n" + "3 - Записати учасника\n" + "4 - Змінити статус набору\n" + "5 - Додати новий гурток\n" + "6 - Показати статистику\n" + "0 - Вихід");

    switch (option) {
        case 1:
            if (clubs.length === 0) {
                alert("У каталозі немає гуртків");
                break;
            }
            clubs.forEach(function (item) {
                recruitment = "набір закритий";
                if (item.active === true) {
                    recruitment = "набір відкритий";
                }
                alert(`#${item.id} ${item.name} | ${item.category} | ${item.price} грн | учасників: ${item.members} | ${recruitment}`);
            });
            break;

        case 2:
            searchId = +prompt("Введіть ID гуртка:");
            currentClub = null;
            for (let item of clubs) {
                if (item.id === searchId) {
                    currentClub = item;
                    break;
                }
            }
            if (currentClub === null) {
                alert("Гурток з таким ID не знайдено");
            } else {
                recruitment = "набір закритий";
                if (currentClub.active === true) {
                    recruitment = "набір відкритий";
                }
                alert(`#${currentClub.id} ${currentClub.name} | ${currentClub.category} | ${currentClub.price} грн | учасників: ${currentClub.members} | ${recruitment}`);
            }
            break;

        case 3:
            searchId = +prompt("Введіть ID гуртка:");
            currentClub = null;
            for (let item of clubs) {
                if (item.id === searchId) {
                    currentClub = item;
                    break;
                }
            }
            if (currentClub === null) {
                alert("Гурток з таким ID не знайдено");
            } else if (currentClub.active === false) {
                alert("У цей гурток набір не ведеться");
            } else if (confirm("Записати нового учасника?")) {
                currentClub.members++;
                alert(`Учасника записано. Тепер у гуртку ${currentClub.members} учасників`);
            } else {
                alert("Запис скасовано");
            }
            break;

        case 4:
            searchId = +prompt("Введіть ID гуртка:");
            currentClub = null;
            for (let item of clubs) {
                if (item.id === searchId) {
                    currentClub = item;
                    break;
                }
            }
            if (currentClub === null) {
                alert("Гурток з таким ID не знайдено");
            } else if (confirm("Змінити статус набору?")) {
                if (currentClub.active === true) {
                    currentClub.active = false;
                    alert(`Набір у гурток "${currentClub.name}" закрито`);
                } else {
                    currentClub.active = true;
                    alert(`Набір у гурток "${currentClub.name}" відкрито`);
                }
            } else {
                alert("Статус не змінено");
            }
            break;

        case 5:
            let clubName = prompt("Введіть назву гуртка");
            while (clubName === "" || clubName === null) {
                clubName = prompt("Назва не може бути порожньою, спробуйте ще раз");
            }
            let clubCategory = prompt("Введіть напрям");
            let clubPrice = +prompt("Введіть вартість за місяць");
            while (clubPrice < 0 || Number.isNaN(clubPrice)) {
                clubPrice = +prompt("Вартість не може бути від'ємною, введіть ще раз");
            }
            let clubMembers = +prompt("Введіть кількість учасників");
            while (clubMembers < 0 || Number.isNaN(clubMembers)) {
                clubMembers = +prompt("Кількість не може бути від'ємною, введіть ще раз");
            }
            let lastId = 0;
            for (let item of clubs) {
                if (item.id > lastId) {
                    lastId = item.id;
                }
            }
            clubs.push({
                id: lastId + 1,
                name: clubName,
                category: clubCategory,
                price: clubPrice,
                members: clubMembers,
                active: true
            });
            alert(`Гурток "${clubName}" додано з ID ${lastId + 1}`);
            break;

        case 6:
            if (clubs.length === 0) {
                alert("У каталозі немає гуртків");
                break;
            }
            let openCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;
            for (let item of clubs) {
                if (item.active === true) {
                    openCount++;
                }
                totalMembers += item.members;
                totalPrice += item.price;
            }
            alert(`Усього гуртків: ${clubs.length}\nЗ відкритим набором: ${openCount}\nУсього учасників: ${totalMembers}\nСередня вартість: ${totalPrice / clubs.length} грн`);
            break;

        case 0:
            break;

        default:
            alert("Такого пункту меню немає");
    }
} while (option !== 0);
