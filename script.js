window.addEventListener('load',()=>{setTimeout(()=>document.getElementById('loader').classList.add('hide'),700);});
const menuBtn=document.getElementById('menuBtn'),navlinks=document.getElementById('navlinks');
menuBtn.addEventListener('click',()=>{navlinks.classList.toggle('active');menuBtn.textContent=navlinks.classList.contains('active')?'×':'☰';});
document.querySelectorAll('.navlinks a').forEach(link=>link.addEventListener('click',()=>{navlinks.classList.remove('active');menuBtn.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show');});},{threshold:.1});
document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
const chatbotBtn=document.getElementById('chatbotBtn'),chatbot=document.getElementById('chatbot'),closeChat=document.getElementById('closeChat');
chatbotBtn.addEventListener('click',()=>chatbot.classList.toggle('show'));closeChat.addEventListener('click',()=>chatbot.classList.remove('show'));