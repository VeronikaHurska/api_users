let url = new URL(location.href);
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
    .then((response) => response.json())
    .then(post => {
        console.log(post)

        for (const key in post) {
            let divPost = document.createElement('div')
            divPost.innerText =`${key} : ${post[key]}`
            document.body.appendChild(divPost)
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(comments => {
                console.log(comments);
            })



    })