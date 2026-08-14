// 学术网站交互脚本
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initThemeToggle();
  initScrollSpy();
});

// 移动端汉堡菜单
function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// 深浅色主题切换（记忆用户选择）
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle?.querySelector('.theme-icon');

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(theme);

  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    if (icon) icon.textContent = t === 'dark' ? '☀️' : '🌙';
  }
}

// 滚动监听：高亮当前所在章节的导航链接
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;

    let currentId = '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  });
}
