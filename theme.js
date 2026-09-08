(() => {
  const key = 'bofan-theme';
  let theme = 'light';
  try { if (localStorage.getItem(key) === 'dark') theme = 'dark'; } catch {}
  document.documentElement.dataset.theme = theme;
  function update() {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    button.textContent = dark ? '☀ Light mode' : '☾ Dark mode';
    button.setAttribute('aria-label', dark ? '切換至 Light mode' : '切換至 Dark mode');
    button.setAttribute('aria-pressed', String(dark));
  }
  document.addEventListener('DOMContentLoaded', () => {
    update();
    document.getElementById('theme-toggle').addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem(key, next); } catch {}
      update();
    });
  });
  window.addEventListener('storage', event => {
    if (event.key !== key) return;
    document.documentElement.dataset.theme = event.newValue === 'dark' ? 'dark' : 'light';
    update();
  });
})();
