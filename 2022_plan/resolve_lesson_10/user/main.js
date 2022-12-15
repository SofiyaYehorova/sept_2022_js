// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана
// через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача

const div = document.createElement('div');
div.classList.add('main');
document.body.appendChild(div);

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            const ulInfoID = document.createElement('ul');
            ulInfoID.innerText = `${user.id} ${user.name}`

            const a = document.createElement('a');
            a.href = `user-details1.html?id=${user.id}`;
            a.innerText = `more`;

            div.append(ulInfoID, a);
        }
    })