let url = new URL(location.href);
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts` + id)
    .then((response) => response.json())
    .then(post => {
        console.log(post)
        for (const key of post) {
            console.log(key);
            for (const keyKey in key) {

            }
        }
    })