// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let arr = [];
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1, 'sofiya', 'yehorova', 'yehorova66@gmail.com', 2569589 );
// let user2 = new User(2, 'oleksandr', 'sukhanov', 'sukhanov1@gmail.com', 2549862);
// let user3 = new User(3, 'hhjsdk', 'hwjfg', 'ajfneu@jmxd', 2548462);
// let user4 = new User(4, 'dfhtuf', 'hfbysdfg', 'xbyfx@fgn', 5481259);
// let user5 = new User(5, 'gfgdyhs', 'bdtfxya', 'gyg@chjfj', 5454548);
// let user6 = new User(6, 'shfgshfg', 'hsbgfby', 'ygfbus@djhsjf', 5489654);
// let user7 = new User(7, 'dgyjegfjcs', 'yxyfj', 'yfbgxw@yfnsf', 5489602);
// let user8 = new User(8, 'gxsjhjs', 'befxysfg', 'bydgy@hjagjd', 5487201);
// let user9 = new User(9, 'fhfgej', 'xfygxsubgf', 'jchcbg@fhuhsk', 2156987);
// let user10 = new User(10, 'abjkfak', 'axbgfygfsjfj', 'bxwfgyu@shnxfnisfhi', 5487896);
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// // console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter(value => value.id%2===0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = arr.sort((a, b)=>b.id-a.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this. id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arrClient = [];
//
// let client1 = new Client(1, 'sofiya', 'yehorova', 'yehorova66@gmail.com', 2569589, ['fvf', 'vdtty'] );
// let client2 = new Client(2, 'oleksandr', 'sukhanov', 'sukhanov1@gmail.com', 2549862, ['fvf', 'cdrtytyv', 'vdtty']);
// let client3 = new Client(3, 'hhjsdk', 'hwjfg', 'ajfneu@jmxd', 2548462, ['fvf', 'vdtty']);
// let client4 = new Client(4, 'dfhtuf', 'hfbysdfg', 'xbyfx@fgn', 5481259, ['fvf', 'cdrtytyv']);
// let client5 = new Client(5, 'gfgdyhs', 'bdtfxya', 'gyg@chjfj', 5454548, ['cdrtytyv', 'vdtty']);
// let client6 = new Client(6, 'shfgshfg', 'hsbgfby', 'ygfbus@djhsjf', 5489654, ['fvf', 'cdrtytyv', 'vdtty', 'fvfbjj']);
// let client7 = new Client(7, 'dgyjegfjcs', 'yxyfj', 'yfbgxw@yfnsf', 5489602, ['fvf', 'cdrtytyv', 'vdtty', 'vffyy']);
// let client8 = new Client(8, 'gxsjhjs', 'befxysfg', 'bydgy@hjagjd', 5487201, ['fvf', 'cdrtytyv', 'vdtty']);
// let client9 = new Client(9, 'fhfgej', 'xfygxsubgf', 'jchcbg@fhuhsk', 2156987, ['vdtty']);
// let client10 = new Client(10, 'abjkfak', 'axbgfygfsjfj', 'bxwfgyu@shnxfnisfhi', 5487896, ['cdrtytyv']);
//
// arrClient.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(arrClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = arrClient.sort((a, b)=>a.order.length-b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(producer, model, year, maxSpeed, volume) {
//     this.producer = producer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = (function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     });
//     this.info = (function (){
//         for (const key in this) {
//                 if(typeof this[key]!=='function'){
//                     `${key}--${this[key]}`;
//                 }
//             }
//         }
//     );
//     this.increaseMaxSpeed=function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear=function (newValue){
//         this.year += newValue;
//     }
//     this.addDriver=function (driver){
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car('ford', 'focus', 2008, 260, '1800');
//
// console.log(car);
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2);
// car.addDriver({name: 'Sofiya', age: 37});


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(producer, model, year, maxSpeed, volume) {
//         this.producer = producer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info (){
//         for (const key in this) {
//             if(typeof key!=='function'){
//                 `${key}--${this[key]}`;
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue){
//         this.year += newValue;
//     }
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
//
// let car = new Car('ford', 'focus', 2008, 260, '1800');
//
// console.log(car);
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2);
// car.addDriver({name: 'Sofiya', age: 37});


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderella1 = new Cinderella('sofiya', 37, 37);
// let cinderella2 = new Cinderella('liliya', 35, 39);
// let cinderella3 = new Cinderella('lesja', 54, 36);
// let cinderella4 = new Cinderella('tetjana', 60, 38);
// let cinderella5 = new Cinderella('olja', 36, 41);
// let cinderella6 = new Cinderella('galia', 30, 35);
// let cinderella7 = new Cinderella('ira', 32, 37);
// let cinderella8 = new Cinderella('olya', 70, 35);
// let cinderella9 = new Cinderella('lileya', 5, 30);
// let cinderella10 = new Cinderella('anna', 4, 29);

// let arrCinderellas = [];
//
// arrCinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10)
// console.log(arrCinderellas);
//
// class Prince{
//     constructor(name, age, findfootSize) {
//         this.name = name;
//         this.age = age;
//         this.findfootSize = findfootSize;
//     }
// }
//
// let prince = new Prince('mark', 20, 30);
//
// function find(array, prince){
//     for (const element of array) {
//         if(prince.findfootSize===element.footSize){
//             return `my Cinderella is ${element.name}`
//         }
//     }
// }
//
// console.log(find(arrCinderellas, prince));