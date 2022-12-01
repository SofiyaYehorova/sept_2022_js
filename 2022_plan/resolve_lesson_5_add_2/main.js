// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const min = (a, b, c) => {
//     if (a > b && b < c) {
//         console.log(b);
//     } else if (b > c && c < a) {
//         console.log(c);
//     } else if (b > a && a < c) {
//         console.log(a);
//     } else {
//         console.log('mistake');
//     }
// };
//
// min(10, 5, 20);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const max=(a, b, c)=>{
//     if(a>b && a>c){
//         console.log(a);
//     }else if(b>a && b>c){
//         console.log(b);
//     }else if(c>a && c>b){
//         console.log(c);
//     }else console.log('Mistake');
// }
//
// max(5, 10, 15);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [5, 10, 15, 89];
//
// const maxNumb=(array)=>{
//     let max=array[0];
//     for (const element of array) {
//         if (element>arr[0]){
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(maxNumb(arr));

// - створити функцію яка повертає найменьше число з масиву

// let arr = [5, 10, 25, -89];
//
// const minNumb=(array)=>{
//     let min=array[0]
//     for (const element of array) {
//         if (element<min){
//             min = element;
//         }
//     }
//     return min;
// }
//
// console.log(minNumb(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [10, 23, 89];
//
// const medSum=(array)=>{
//     let res = 0;
//     for (const element of array) {
//         res += element;
//     }
//     return res/array.length
// }
//
// console.log(medSum(arr));

// - Дано натуральное число n. Выведите все числа от 1 до n.

// const num = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// console.log(num(5));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в
// противном случае.

// const comparison = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     }else
//         if (a > b) {
//             for (let i = a; i >= b; i--) {
//                 console.log(i);
//             }
//         }
//     }
// console.log(comparison(10, 1));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [9, 8, 0, 4];

// const changeIndex=(array, index)=>{
//     for (let i = 0; i < array.length; i++) {
//        if(array[i+1]){
//            let change = array[index];
//            array[index] = array[index + 1];
//            array[index + 1] = change;
//        }
//     }
//     return array;
// }
//
// console.log(changeIndex(arr, 1));

// const changeIndex1=(array, index)=>{
//     if(index===0){
//         [arr[0], arr[1]] = [arr[1], arr[0]];
//     }
//     return array;
// }
//
// console.log(changeIndex1(arr, 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let arr = [0,0,1,0];
//
// const zero = (array) => {
//     let newArray = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         array[i] ? newArray[index++] = array[i] : counter++;
//     }
//     const number = newArray.length;
//     for (let i = number; i < number + counter; i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }
//
// console.log(zero(arr));