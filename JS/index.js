window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("ch1",window.scrollY >30);
});


const htp= document.getElementById('menu');
const navUL=document.getElementById('H-top');

htp.addEventListener('click', () => {
navUL.classList.toggle('SH');
});