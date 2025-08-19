const postsApi = "https://jsonplaceholder.typicode.com/posts"
function displayPosts(posts) {
    const ul = document.getElementById("post-list");
    if (!Array.isArray(posts) || !ul) return;
    ul.textContent = "";
//Loop the array
    for (const post of posts) {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.textContent = post.title;
        const p = document.createElement("p");
        p.textContent = post.body;
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    }
}
async function loadPosts() {
    try {
        const res = await fetch(postsApi);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        displayPosts(data);
    } catch (err) {
        console.error("Failed to load posts:", err);
    }
}
document.addEventListener("DOMContentLoaded", loadPosts);