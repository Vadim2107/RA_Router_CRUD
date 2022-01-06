export const getAllPosts = (callback) => {
    fetch('http://localhost:7777/posts')
        .then(res => res.json())
        .then(res => callback(res))
}
