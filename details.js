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
            div.classList.add('user-element')
            divFull.append(div);

        }
    }
}

let url = new URL(location.href);
let id = url.searchParams.get('id')
let btn_posts = document.createElement('button');
btn_posts.innerText = ' POSTS OF CURRENT USER';
btn_posts.classList.add('post-button')
fetch(`https://jsonplaceholder.typicode.com/users/` + id)
    .then(response => response.json())
    .then(user => {

        print(user)
        let divButtonPosts = document.createElement('div');
        divButtonPosts.classList.add('div-for-button')
        document.body.appendChild(divButtonPosts)
        divButtonPosts.appendChild(btn_posts);

        let allPostsDiv = document.createElement('div');
        allPostsDiv.classList.add('all-posts-div');
        divButtonPosts.appendChild(allPostsDiv);
        btn_posts.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {

                        let post_div = document.createElement('div')
                        post_div.innerHTML = post.title;
                        post_div.classList.add("posts-short-info")
                        let btn_post_details = document.createElement('button')
                        btn_post_details.innerHTML = 'post details'

                        post_div.append(btn_post_details);
                        allPostsDiv.appendChild(post_div)
                         // document.body.appendChild(post_div)
                        btn_post_details.onclick = () => {
                            document.location = `post-details.html?id=${post.id}`
                        }

                    }

                })
        }

    })
