const contentURL = new URL('/content/content.md', window.location.origin);
window.addEventListener('DOMContentLoaded', event => {
  fetch(contentURL)
    .then(response => response.text())
    .then(text => {
      const contentList = document.getElementById('contentList');
      const lines = text.split('\n');
      const markdownItems = lines.filter(line => line.trim().startsWith('-'));

      markdownItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = item.slice(1); // 去掉 "-"
        contentList.appendChild(listItem);
      });
    });
});
