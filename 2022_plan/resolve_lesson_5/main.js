// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleArea(a, b) {
//     return a * b;
// }
//
// console.log(rectangleArea(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const Pi=3.14;
// function circleArea (r){
//     return Pi*r*r;
// }
//
// console.log(circleArea(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(r, h){
//     return 2*Pi*r*(h+r);
// }
//
// console.log(cylinderArea(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
//
//
// function arrayUsers(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// arrayUsers(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     return document.write(`<p>${text}</p>`)
// }
//
// paragraph('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function structureUl(text){
//     return document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// structureUl('hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається
// другим аргументом, який є числовим (тут використовувати цикл)

// function structureUl(text, number){
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// structureUl('hello', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr=[5, 10, 'hello', 'text', true, false];
// function same(array){
//     document.write(`<ul>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// same(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
// ];
//
// function showElementOfArray(array){
//     for (const arrayElement of array){
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
//     }
// }
// showElementOfArray(users);


// - створити функцію яка повертає найменьше число з масиву

// let numbers = [0, 10, 15, -80, 17];
// function minNum(array){
//     let min=array[0];
//     for (const arrayElement of array) {
//         if(min>arrayElement){
//            min=arrayElement;
//         }
//     }
//     return min;
// }
//
// console.log(minNum(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [10, 15, 30];
//
// function sumOfNum(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
//
// console.log(sumOfNum(numbers));
