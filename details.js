let check = (value) => {
    if (value === null) {
        return false;
    }
    return (typeof value === 'object')
}
let print = (obj) => {
    for (const value in obj) {
        if (check(obj[value])) {
            print(obj[value])
        } else {
            let div = document.createElement('div');
            div.innerText = `${value} -- ${obj[value]}`
            document.body.append(div);

        }
    }
}
let btn_posts = document.querySelector('#postsTitle')
let url = new URL(location.href);
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/users/` + id)
    .then(response => response.json())
    .then(user => {

        print(user)
        btn_posts.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    console.log(posts)
                    for (const post of posts) {
                        let posts_div = document.createElement('div')
                        posts_div.innerHTML = post.title;
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