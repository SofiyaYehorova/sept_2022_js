const wrap = document.createElement('div');
wrap.classList.add('wrap');

document.body.appendChild(wrap);

fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(responce => responce.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('userInfo');
            userDiv.innerText = `${user.id}: ${user.name}`


            const buttonInfo = document.createElement('button');
            buttonInfo.classList.add('buttonInfo');

            const anchor = document.createElement('a');

            anchor.innerText = `More`;
            anchor.href = `../users-details/user-details.html?data=${user.id}`;

            wrap.append(userDiv)
            userDiv.appendChild(buttonInfo);
            buttonInfo.appendChild(anchor);
        }
    });

