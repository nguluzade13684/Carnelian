const showMenu = (toggleId, navId) =>{
    nav = document.getElementById(navId);
    const toggle = document.getElementById(toggleId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n => n.addEventListener('click', linkAction))
window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
const sections = document.querySelectorAll('section[id]')
const sr = ScrollReveal({
    origin: 'top',
    distance: '82px',
    duration: 2000,
    reset: true
})
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '22px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})