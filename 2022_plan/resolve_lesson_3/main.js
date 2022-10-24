// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x=+prompt('input any number')
// if(x!==0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter a number from 0 to 59');

// if(time>0 && time <=15){
//     console.log('first');
// }else if(time>16 && time <=30){
//     console.log('second');
// }else if(time>31 && time<=45){
//     console.log('third');
// }else if(time>46 && time<=59){
//     console.log('forth');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// const date = +prompt('enter the date from 1 to 31');
// if (date>=1 && date<=10){
//     console.log('first');
// }else if(date>=11 && date<=20){
//     console.log('second');
// }else if(date>=21 && date<=31){
//     console.log('third');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що
// заплановано на цей день (можна замість плану на день, назву дня англійською).

// const day = prompt('enter the day of the week');
// switch (day) {
//     case 'понеділок':
//         console.log('monday');
//         break;
//     case 'вівторок':
//         console.log('tuesday');
//         break;
//     case 'середа':
//         console.log('wednesday');
//         break;
//     case 'четвер':
//         console.log('thursday');
//         break;
//     case 'пятниця':
//         console.log('friday');
//         break;
//     case 'субота':
//         console.log('saturday');
//         break;
//     case 'неділя':
//         console.log('sunday');
//         break;
//     default:
//         console.log('????????');
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// const num1 = +prompt('enter a number 1');
// const num2 = +prompt('enter a number 2');
// if (num1 > num2) {
//     console.log('max.number 1');
// } else if(num2 > num1) {
//     console.log('max.number 2');
// }else if(num1===num2){
//     console.log('numbers are even');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

// let x1 = ' ';
// let x2 = 5;
// let x3 = undefined;
// let x4 = null;
// let x5 = NaN;
// let x6 = '';
// let x7 = true;
// let x8 = false;
// let x9 = 0;
// console.log(x3 || x5);
// console.log(x3 || x4);
// console.log(x3 || x8);
// console.log(x4 || x5);
// console.log(x4 || x8);
// console.log(x5 || x8);

