//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
// }
// }

// class UserInfo {
//
//     /**
//      *
//      * @param {number} id
//      * @param {string} name
//      * @param {string} username
//      * @param {string} email
//      * @param {string} address (street, suite, city, zipcode)
//      * @param {number} phone
//      * @param {string} website
//      * @param {string} company
//      */
//
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             constructorAddress(street, suite, city, zipcode, geo) {
//                 this.street = street;
//                 this.suite = suite
//                 this.city = city;
//                 this.zipcode = zipcode;
//                 this.geo = {
//                     constructorGeo(lat, lng) {
//                         this.lat = lat;
//                         this.lng = lng;
//                     }
//                 }
//             }
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             constructorCompany(companyName, catchPhrase, bs) {
//                 this.companyName = companyName;
//                 this.catchPhrase = catchPhrase;
//                 this.bs = bs;
//             }
//         }
//
//     }
//
//
// }
//
// // console.log(UserInfo);
//
// let userInfo1 = new UserInfo(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//     }
// },
//     '1-770-736-8031 x56442',
//      'hildegard.org',
//     {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
//
// })
//
// console.log(userInfo1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class TagDescription {
//
//     constructor(titleOfTag, action, arrayOfAttributes) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.arrayOfAttributes = {
//             constructorArray(nameOfAttribute, attributeActionDescription) {
//                 this.nameOfAttribute = nameOfAttribute;
//                 this.attributeActionDescription = attributeActionDescription;
//             }
//         }
//     }
// }

// let tagA = new TagDescription('a', 'Створює посилання',
//     ['a', 'Створює посилання']);
// let tagDiv = new TagDescription('div', 'Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS',
//     ['div', 'Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS']);
// let tagH1 = new TagDescription('h1', '<H1> визначає найбільш важливі заголовки',
//     ['h1', '<H1> визначає найбільш важливі заголовки']);
// let tagSpan = new TagDescription('span', 'Тег <span> являє собою універсальний порожній контейнер',
//     ['span', 'Тег <span> являє собою універсальний порожній контейнер']);
// let tagInput = new TagDescription('input', 'HTML теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем',
//     ['input', 'HTML теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем']);
// let tagForm = new TagDescription('form', 'HTML теґ <form> використовується для створення HTML форми на сторінці',
//     ['form', 'HTML теґ <form> використовується для створення HTML форми на сторінці']);
// let tagOption = new TagDescription('option', 'HTML тег option призначений для створення пункту списку для тега select чи datalist',
//     ['option', 'HTML тег option призначений для створення пункту списку для тега select чи datalist']);
// let tagSelect = new TagDescription('select', 'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором',
//     ['select', 'Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором']);
//
//
// console.log(tagA);