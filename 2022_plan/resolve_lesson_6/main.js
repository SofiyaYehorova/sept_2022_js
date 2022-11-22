// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1='HELLO WORLD';
// let str2='LOREM IPSUM';
// let str3='JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// const trim = str.trim();
// // console.log(trim);
//
// for (const trimElement of trim) {
//     console.log(trimElement);
// }

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// const split = str.split(' ');
// console.log(split);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers=[10,8,-7,55,987,-1011,0,1050,0];
// const map = numbers.map(value => value.toString());
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від
// значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
// console.log(nums.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     } else (a === b)
//     {
//         {
//             return 0;
//         }
//     }
// }));
//
// console.log(nums.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     } else (a === b)
//     {
//         {
//             return 0;
//         }
//     }
// }));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) => {
//     if (a.monthDuration > b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration < b.monthDuration) {
//         return -1;
//     } else (a.monthDuration === b.monthDuration)
//     {
//         return 0;
//     }
// }));


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// const filter = coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filter);

// описати колоду карт

let deckOfCards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'joker', color: 'black'},

    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'joker', color: 'red'},

    {cardSuit: 'heard', value: 6, color: 'red'},
    {cardSuit: 'heard', value: 7, color: 'red'},
    {cardSuit: 'heard', value: 8, color: 'red'},
    {cardSuit: 'heard', value: 9, color: 'red'},
    {cardSuit: 'heard', value: 10, color: 'red'},
    {cardSuit: 'heard', value: 'jack', color: 'red'},
    {cardSuit: 'heard', value: 'queen', color: 'red'},
    {cardSuit: 'heard', value: 'king', color: 'red'},
    {cardSuit: 'heard', value: 'ace', color: 'red'},
    {cardSuit: 'heard', value: 'joker', color: 'red'},

    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'joker', color: 'black'}
];

// - знайти піковий туз
// const findAce = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// console.log(findAce);

// - всі шістки

// const filterOfSix = deckOfCards.filter(card => card.value === 6);
// console.log(filterOfSix);

// - всі червоні карти

// const filterOfRed = deckOfCards.filter(card => card.color === 'red');
// console.log(filterOfRed);

// - всі буби

// const filterOfDiamond = deckOfCards.filter(card => card.cardSuit === 'diamond');
// console.log(filterOfDiamond);

// - всі трефи від 9 та більше

// const filterOfClubs = deckOfCards.filter(card => card.cardSuit === 'clubs' && card.value >= 9 ||
//     typeof card.value === 'string' && card.cardSuit === 'clubs');
// console.log(filterOfClubs);


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reduce = deckOfCards.reduce(function (accumulator, cardSuite) {
    if (cardSuite.cardSuit === 'spade') {
        accumulator.spades.push(cardSuite);
    } else if (cardSuite.cardSuit === 'diamond') {
        accumulator.diamonds.push(cardSuite);
    } else if (cardSuite.cardSuit === 'heard') {
        accumulator.hearts.push(cardSuite);
    } else if (cardSuite.cardSuit === 'clubs') {
        accumulator.clubs.push(cardSuite)
    }
    return accumulator
}, {spades: [], diamonds: [], hearts: [], clubs: []}
);
console.log(reduce);



