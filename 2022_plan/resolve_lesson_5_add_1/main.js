// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(a, b, c) {
//     if (a > b && b < c) {
//         console.log(b);
//     } else if (b > c && c < a) {
//         console.log(c);
//     } else if (b > a && a < c) {
//         console.log(a);
//     } else {
//         console.log('mistake');
//     }
// }
//
// min(10, 5, 20);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     } else {
//         console.log('Mistake');
//     }
// }
//
// max(20, 2, 30);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [10, 14, 56, -84, 23];
//
// function maxNum(array) {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement>max){
//             max = arrayElement;
//         }
//     }
//     return max;
// }
//
// console.log(maxNum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 15, 26, 84, 126];
//
// function medSum(array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum/array.length;
// }
//
// console.log(medSum(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(...arguments){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const argument of arguments) {
//         if (argument>max){
//             max = argument;
//         }if(min>argument){
//             min = argument;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// let numbers = minMax(10, 15, 24, 26);
// console.log(numbers);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
//
// function arrRandom() {
//     for (let i = 0; i < 20; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     console.log(arr);
// }
//
// arrRandom();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве
// значення діапазону.

// let arr = [];
// function numLimit(limit){
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     console.log(arr);
// }
//
// numLimit(10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3];
// function turnArr(array){
//     let newArr = [];
//     for (let i = array.length - 1, k=0; i >= 0; i--) {
//         newArr[k++] = array[i];
//     }
//     return newArr;
// }
//
// console.log(turnArr(arr));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// const x = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
// console.log(x("d", 20));

// function x(...arguments){
//     if(arguments.length===2){
//         console.log((arguments[0] + arguments[1]));
//     }else console.log((arguments[0]));
// }
//
// x('v', 'f');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 9];
// результат
//     [3,5,7,9]

//
// function sumArr(array1, array2){
//     let res=[];
//     let sizeArray = array1.length >= array2.length ? array1 : array2;
//     for (let i = 0; i < sizeArray.length; i++) {
//         res[i] = (array1[i] || 0) + (array2[i] || 0);
//     }
//     return res;
// }
//
// console.log(sumArr(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]

// function key(array) {
//     let newArr = [];
//     for (let i = 0, k = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             newArr[k++] = key;
//         }
//     }
//     return newArr;
// }
//
// console.log(key(arr));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function valueOfArr(array){
//     let newArr = [];
//     for (let i = 0, k=0; i < array.length; i++) {
//         for (const key in array[i]) {
//             newArr[k++] = array[i][key];
//         }
//     }
//     return newArr;
// }
//
// console.log(valueOfArr(arr));