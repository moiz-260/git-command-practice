document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addBtn');
  const input = document.getElementById('newItem');
  const list = document.getElementById('items');
  const themeBtn = document.getElementById('themeBtn');

  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
  });

  themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});
