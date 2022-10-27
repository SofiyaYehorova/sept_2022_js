// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr=[];
//
// for (let i = 0; i < 100; i+=2) {
//     const arrElement = arr[i];
//     console.log(i);
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arr1=[];
// for (let i = 1; i < 100; i+=2) {
//     const arr1Element = arr1[i];
//     console.log(i);
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arrNum=[];
// for (let i = 0; i <20; i++) {
//     const arrNum1Element = arrNum[i];
//     arrNum.push(Math.ceil(Math.random()*100));
//     console.log(arrNum);
// }

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arrNum1=[];
// for (let i = 0; i < 20; i++) {
//     const arrNum1Element = arrNum1[i];
//     arrNum1.push(Math.ceil(Math.random()*(732-8)+8));
//     console.log(arrNum1);
// }

// 2. Вивести за допомогою console.log кожен третій елемен

// let arr=[];
// for (let i = 2; i < 20; i+=3) {
//     const arrElement = arr[i];
//     console.log(i);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arr=[];
// for (let i = 2; i < 20; i+=3) {
//     const arrElement = arr[i];
//     if(i%2===0){
//         console.log(i);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr=[];
// let arr1=[]
// for (let i = 2; i < arr.length; i+=3) {
//     if(arr[i]%2===0) {
//         arr.push(arr1[i])
//     }
//     console.log(arr1[i]);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let bills = [100, 250, 50, 168, 120, 345, 188];
// let sumBills = 0;
//
// for (let i = 0; i < bills.length; i++) {
//
//     sumBills += bills[i];
//     console.log(sumBills);
// }
//
// let medSumOfBills = sumBills/bills.length
// console.log(medSumOfBills);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrR=[];
// let arrR1=[];
// for (let i = 0; i < 20; i++) {
//     arrR.push(Math.ceil(Math.random()*100));
//     // console.log(arrR[i]);
//     arrR1.push(arrR[i]*5);
//     console.log(arrR1);
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr=['hello', 25, 40, true, false, 'hi'];
// let arr1=[];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     // console.log(arr[i]);
//     if(typeof arr[i]===`number`){
//         arr1.push(arr[i])
//     }
//     console.log(arr1);
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//         }
//     }
// }
// usersWithCities=usersWithId;
// console.log(usersWithCities);


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let num=[15, 10, 20, 54, 45, 26, 32, 17, 19, 3];
//
// for (let i = 0; i < num.length; i++) {
//    if (num[i]%2===0){
//        console.log(num[i]);
//    }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного
// масиву в інший.

// let num=[15, 10, 20, 54, 45, 26, 32, 17, 19, 3];
// let num1=[];
//
// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     num1[i]=num[i];
//     console.log(num1[i]);
// }
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     str = str + arr[i];
//     console.log(str);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// let i = 0;
//
// while (i < arr.length) {
//     str = str + arr[i]
//     i++;
// };
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
//
// for (const arrElement of arr) {
//     str=str+arrElement
// }
// console.log(str);