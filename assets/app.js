const state = { posts: [], filtered: [] };

async function loadPosts() {
  const response = await fetch("data/posts.json");
  if (!response.ok) {
    throw new Error("Failed to load posts.");
  }
  return response.json();
}

function render() {
  const feed = document.getElementById("feed");
  const meta = document.getElementById("meta");
  const template = document.getElementById("postTemplate");
  feed.innerHTML = "";
  meta.textContent = `${state.filtered.length} post(s)`;

  state.filtered.forEach((post) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".author").textContent = post.author;
    fragment.querySelector(".content").textContent = post.content;
    const tags = fragment.querySelector(".tags");
    post.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.appendChild(span);
    });
    feed.appendChild(fragment);
  });
}

function applyFilter() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  state.filtered = state.posts.filter((post) => {
    const target = `${post.author} ${post.content} ${post.tags.join(" ")}`.toLowerCase();
    return query === "" || target.includes(query);
  });
  render();
}

async function main() {
  state.posts = await loadPosts();
  state.filtered = [...state.posts];
  render();
  document.getElementById("searchInput").addEventListener("input", applyFilter);
}

main().catch((error) => {
  document.getElementById("meta").textContent = error.message;
});
