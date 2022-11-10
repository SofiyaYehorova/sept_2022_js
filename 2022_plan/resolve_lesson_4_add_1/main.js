// --створити масив з:
//     - з 5 числових значень

// let arr=[10, 20, 30, 40, 50]

// - з 5 стічкових значень

// let arr1=['hello', 'hi', 'name', 'username', 'status']

// - з 5 значень стрічкового, числового та булевого типу

// let arr2=[true, false, 10, 20, 'okten'];

// - та вивести його в консоль

// console.log(arr1, arr2, arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 10;
// arr[1] = true;
// arr[2] = 'hello';
// console.log(arr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++
// }

//     2. перебрати його циклом for

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arr[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(i%2!==0){
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while(i<arr.length){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
//         i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//         console.log(arr[i]);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arr[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }

// for (let i = arr.length-1; i >=0 ; i--) {
//     const arrElement = arr[i];
//     console.log(arr[i]);
// }

// let i = arr.length-1;
// while (i >=0 ) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }

//  for (let i = arr.length-1; i >=0; i--) {
//     const arrElement = arr[i];
//     if(i%2!==0){
//         console.log(arr[i]);
//     }
// }

// let i = arr.length-1;
// while(i>=0){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
//         i--
// }

// for (let i = arr.length-1; i >=0 ; i--) {
//     const arrElement = arr[i];
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// for (let i = arr.length-1; i >=0 ; i--) {
//     const arrElement = arr[i];
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr=[15, 12, 14, 65.5, 548, 14.3, 154, 14.02, 14.3, 15.1];
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr1=['hello', 'hi', 'skjfk', 'jkdka', 'mdjxd', 'xndnh', 'undxdu', 'ndxgdu', 'nuzdxqbud', 'nxqnxn'];
//
// for (let i = 0; i < arr1.length; i++) {
//     const arr1Element = arr1[i];
//     console.log(arr1[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr3=['hello', 'hi', 10, 18, 16, false, true, 12];
//
// for (let i = 0; i < arr3.length; i++) {
//     const arr3Element = arr3[i];
//     console.log(arr3[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr3=['hello', 'hi', 10, 18, 16, false, true, 12];
//
// for (let i = 0; i < arr3.length; i++) {
//     const arr3Element = arr3[i];
//     if(typeof arr3[i]===`boolean`){
//         console.log(arr3[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr3=['hello', 'hi', 10, 18, 16, false, true, 12];
//
// for (let i = 0; i < arr3.length; i++) {
//     const arr3Element = arr3[i];
//     if(typeof arr3[i]===`number`){
//         console.log(arr3[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr3=['hello', 'hi', 10, 18, 16, false, true, 12];
//
// for (let i = 0; i < arr3.length; i++) {
//     const arr3Element = arr3[i];
//         if(typeof arr3[i]===`string`){
//             console.log(arr3[i]);
//         }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль
// всі його елементи в циклі.

// let arr4 = [];
//
// arr4[0] = 'hello';
// arr4[1] = 'hi';
// arr4[2] = 10;
// arr4[3] = -15;
// arr4[4] = false;
// arr4[5] = true;
// arr4[6] = 'world';
// arr4[7] = 'angular';
// arr4[8] = 25;
// arr4[9] = -45;
//
// for (let i = 0; i < arr4.length; i++) {
//     const arr4Element = arr4[i];
//     console.log(arr4[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2===0){
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        name: 'Морський ястріб',
        pages: 310,
        author: ['Рафаель Сабатіні'],
        genre: ['пригоди']
    },
    {
        name: 'Динозаври',
        pages: 18,
        author: ['Tasha Percy'],
        genre: ['дитячі']
    },
    {
        name: 'Велика книга почуттів',
        pages: 250,
        author: ['Ґжежож Касдепке'],
        genre: ['дитячі', 'оповідіння', 'пригоди']
    }
]

// -знайти наібльшу книжку.

// let maxBook=books[0];
// for (const book of books) {
//     if(book.pages>maxBook.pages){
//         maxBook=book
//     }
// }
// console.log(maxBook);

// - знайти книжку/ки з найбільшою кількістю жанрів

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let maxGenre=books[0];
// for (const book of books) {
//     if(book.genre>maxGenre.genre){
//         maxGenre=book;
//     }
// }
// console.log(maxGenre);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// - знайти книжку/ки з найдовшою назвою
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let maxNameBook=books[0];
// for (const maxNameBookElement of books) {
//     if(maxNameBookElement.name>maxNameBook.name){
//         maxNameBook=maxNameBookElement
//     }
// }
// console.log(maxNameBook);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 авторA