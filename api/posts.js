async function loadRecentPosts() {
  const container = document.getElementById('posts-list');
  try {
    const response = await fetch('https://fukkatsu-proxy.vercel.app/api/posts'); // <-- Twój adres z Vercel
    const posts = await response.json();

    if (!posts.length) {
      container.innerHTML = "Brak postów 😢";
      return;
    }

    container.innerHTML = '';
    posts.forEach(p => {
      const item = document.createElement('div');
      item.className = 'post-item';
      item.innerHTML = `
        <a href="${p.link}" target="_blank">${p.title}</a>
        <div class="post-meta">${p.author}${p.date ? ' — ' + p.date : ''}</div>
      `;
      container.appendChild(item);
    });
  } catch (err) {
    container.innerHTML = 'Błąd podczas ładowania postów 😢';
  }
}
loadRecentPosts();
