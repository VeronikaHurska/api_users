let url = new URL(location.href);
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
    .then((response) => response.json())
    .then(post => {
        let postDiv = document.createElement('div')
        postDiv.classList.add('post-block')
        for (const key in post) {
            let divPost = document.createElement('div')
            divPost.classList.add("div-comment-key")

            divPost.innerText =`${key} : ${post[key]}`
            postDiv.appendChild(divPost)
            document.body.appendChild(postDiv)
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(comments => {
                let allCommentsDiv = document.createElement('div');
                allCommentsDiv.classList.add('div-comments')
                for (const comment of comments) {
                    let divOneComment = document.createElement('div')
                    divOneComment.classList.add('div-one-comment')
                    for (const commentKey in comment) {
                        let div = document.createElement('div')
                        div.classList.add("div-comment-key")
                        div.innerText = `${commentKey}: ${comment[commentKey]}`
                        divOneComment.appendChild(div)
                        allCommentsDiv.appendChild(divOneComment)
                        document.body.appendChild(allCommentsDiv)
                    }

                }
            })



    })