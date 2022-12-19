let divMain = document.querySelector("#divMain");
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (let user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} -- ${user.name}`
            div.classList.add('user-short-info')
            let btn = document.createElement('button')
            btn.innerText = 'details'
            btn.onclick = () => {
                document.location = `user-details.html?id=${user.id}`
            }
            div.appendChild(btn)
            divMain.appendChild(div)
        }
    })
