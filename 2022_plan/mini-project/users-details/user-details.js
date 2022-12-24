const url = new URL(location.href);
const data = url.searchParams.get('data');

const container = document.createElement('div');
container.classList.add('container');

fetch(`https://jsonplaceholder.typicode.com/users/${data}`)
    .then(response => response.json())
    .then(user => {
        for (const key in user) {

            const userInfo = document.createElement('div');

            if (typeof user[key] !== 'object') {
                userInfo.innerHTML = `${key}: ${user[key]}`

            } else {
                userInfo.innerText = `${key}:`;
                for (const item in user[key]) {
                    const itemUserInfo = document.createElement('div');
                    if (typeof user[key][item] !== 'object') {
                        itemUserInfo.innerText = `${item}: ${user[key][item]}`;

                        userInfo.append(itemUserInfo);
                    } else {
                        userInfo.innerText = `${key}:`;
                        for (const details in user[key][item]) {
                            if (typeof user[key][item][details] !== 'object') {
                                const geo = document.createElement('div');
                                geo.innerText = `${details}: ${user[key][item][details]}`;
                                userInfo.append(geo);
                            }
                        }
                    }
                }
            }


            document.body.append(container);
            container.append(userInfo);


        }

        const buttonMainPost = document.createElement('button');
        buttonMainPost.classList.add('buttonMainPost');
        buttonMainPost.innerText = `Post of current user`;

        container.append(buttonMainPost);

        buttonMainPost.onclick = (e) => {
            e.preventDefault();
            const allPosts = document.createElement('div');
            allPosts.classList.add('allPosts');

            container.appendChild(allPosts);

            fetch(`https://jsonplaceholder.typicode.com/users/${data}/posts`)
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        const postBlock = document.createElement('div');
                        postBlock.classList.add('postBlock');

                        const postDiv = document.createElement('div');
                        postDiv.classList.add('postDiv');
                        postDiv.innerText = `${post.id}: ${post.title}:`;

                        const postButton = document.createElement('button');
                        postButton.classList.add('postButton');


                        const anchorPost = document.createElement('a');
                        anchorPost.classList.add('anchorPost');
                        anchorPost.innerText = `See more`;
                        anchorPost.href = `../posts-details/post-details.html?data=${user.id}`;

                        allPosts.append(postBlock);
                        postBlock.append(postDiv, postButton)
                        // postDiv.append(postButton);
                        postButton.appendChild(anchorPost);
                    }
                })
        }


    });



