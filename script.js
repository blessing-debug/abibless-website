const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

if(menuBtn){
  menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuBtn.textContent = mainNav.classList.contains('active') ? '×' : '☰';
  });
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    if(menuBtn) menuBtn.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1 });

revealItems.forEach(item => observer.observe(item));
