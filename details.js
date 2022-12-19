let check = (value) => {
    if (value === null) {
        return false;
    }
    return (typeof value === 'object')
}
let divFull = document.querySelector('.full-user-info')
let print = (obj) => {
    for (const value in obj) {
        if (check(obj[value])) {
            print(obj[value])
        } else {
            let div = document.createElement('div');
            div.innerText = `${value} -- ${obj[value]}`
            divFull.append(div);

        }
    }
}

let url = new URL(location.href);
let id = url.searchParams.get('id')
let btn_posts = document.createElement('button');
btn_posts.innerText = ' POSTS';
btn_posts.classList.add('post-button')
fetch(`https://jsonplaceholder.typicode.com/users/` + id)
    .then(response => response.json())
    .then(user => {

        print(user)
        let postsDiv = document.createElement('div');
        postsDiv.classList.add()
        document.body.appendChild(postsDiv)
        postsDiv.appendChild(btn_posts);

        btn_posts.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        let posts_div = document.createElement('div')
                        posts_div.innerHTML = post.title;
                        posts_div.classList.add("posts-short-info")
                        let btn_post_details = document.createElement('button')
                        btn_post_details.innerHTML = 'post details'

                        posts_div.append(btn_post_details);
                        document.body.append(posts_div)
                        btn_post_details.onclick = () => {
                            document.location = `post-details.html?id=${post.id}`
                        }

                    }

                })
        }

    })
