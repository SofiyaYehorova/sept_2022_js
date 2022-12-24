const url = new URL(location.href);
const post = url.searchParams.get('data');

const commentsDiv = document.createElement('div');
commentsDiv.classList.add('commentsDiv');

fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
    .then(response => response.json())
    .then(comments => {
            for (const comment of comments) {
                // console.log(comment.name);
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerText = `${comment.id}: ${comment.name} ${comment.email}: ${comment.body}:`;


                commentsDiv.appendChild(commentDiv);

            }

        }
    )
document.body.appendChild(commentsDiv);
