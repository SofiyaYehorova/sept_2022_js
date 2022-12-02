// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let str='наслаждение';
// function cutString(str, n) {
//     const regExp = new RegExp('.{1,' + n + '}', 'g');
//     return str.match(regExp)
// }
// console.log(cutString(str, 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length) {
//     return str.substring(0, length)
// }
//
// console.log(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи
// рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// console.log(str.split(' ').join('-'));

// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// const insert_dash = (str) => str.split(' ').join('-').toUpperCase();
//
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// function toUpperCase (str){
//         return str[0].toUpperCase()+str.substring(1)
//         }
// console.log(toUpperCase('ghbds'));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// const clean = (str) => str
//     .replaceAll('.', ' ')
//     .replaceAll('-', ' ')
//     .replaceAll('_', ' ');
//
// console.log(clean(n1));
// console.log(clean(n2));
// console.log(clean(n3));


//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = [];
//
// function randomInt(min, max) {
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.floor(Math.random() * (max - min) + min));
//     }
//     return arr;
// }
//
// let res = randomInt(0, 100)
// console.log(arr);
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за
// // допомоги sort
//
// const sort = arr.sort((a, b) => a - b);
//
// console.log(sort);
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за
// // допомоги filter, залишивши тільки парні числа (без 0!)
//
// let filter = arr.filter(value => value % 2 === 0);
// console.log(filter);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = ' мама хоче спокою ';
// const capitalize=(str)=>str
//     .trim()
//     .split(' ')
//     .map((value)=>{
//         return value[0].toUpperCase()+value.substring(1);
//     })
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

// let email1 = 'someemail@gmail.com';
// let email2 = 'someeMAIL@gmail.com';
// let email3 = 'someeMAIL@i.ua';
// let email4 = 'some.email@gmail.com';
//
// function validator(email) {
//     let result = false;
//     if (email.indexOf('@') > -2 && email.indexOf('.' > 2)) {
//         result = true;
//     }
//     return result;
// }
//
// console.log(validator(email1));
// console.log(validator(email2));
// console.log(validator(email3));
// console.log(validator(email4));

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з
// регулярками будете потім бавитись.
//
// - є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js',
//             'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// const sort = coursesArray.sort((a, b)=>a.modules.length-b.modules.length);
//
// console.log(sort);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";
//
// function count(str, stringSearch) {
//     let res = 0;
//     const split = str.split('');
//     for (let i = 0; i < split.length; i++) {
//         if (split[i] === stringSearch) {
//             res++
//         }
//     }
//     return res;
// }
//
// console.log(count(str, 'о'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n){
//     const split = str.split(' ');
//     // const num = str.remove;
//     // console.log(split);
// }
//
// console.log(cutString(str));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню