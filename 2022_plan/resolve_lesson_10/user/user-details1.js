const url = new URL(location.href);
const id = url.searchParams.get('id');

const divInfo = document.createElement('div');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(info => info.json())
    .then(detailsUser => {

        for (const key in detailsUser) {
            if (typeof detailsUser[key] !== 'object') {
                const ulInfo = document.createElement('ul');
                ulInfo.innerText = `${key} ${detailsUser[key]}`

                divInfo.appendChild(ulInfo);
            } else {
                for (const item in detailsUser[key]) {
                    if (typeof detailsUser[key][item] !== 'object') {
                        const ulItem = document.createElement('ul');
                        ulItem.innerText = `${item} ${detailsUser[key][item]}`;

                        divInfo.appendChild(ulItem);
                    } else {
                        for (const itemDetails in detailsUser[key][item]) {
                            if (typeof detailsUser[key][item][itemDetails] !== 'object') {
                                const ulDetails = document.createElement('ul');
                                ulDetails.innerText = `${itemDetails} ${detailsUser[key][item][detailsUser]}`

                                divInfo.appendChild(ulDetails);
                            }
                        }
                    }
                }
            }
        }

    })

document.body.appendChild(divInfo);