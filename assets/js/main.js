0/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/




const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

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
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.education__data, .work__img, .work__container',{interval: 200}); 
sr.reveal('.education__data, .work__img, .contact__input',{interval: 200}); 
<!--===== JS FOR COUNTER =====-->

// JavaScript for counter animation
const counter = document.getElementById("question-counter");
const targetCount = 135; // Change this to your desired target count
let currentCount = 0;

function updateCounter() {
  const increment = targetCount /90; // Speed of animation (larger number = slower animation)
  if (currentCount < targetCount) {
    currentCount += increment;
    counter.textContent = Math.floor(currentCount);
    requestAnimationFrame(updateCounter);
  } else {
    counter.textContent = targetCount;
  }
}

// Call the function when the element is in the viewport
function handleScrollAnimation() {
  const counterPosition = counter.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (counterPosition < windowHeight) {
    updateCounter();
    window.removeEventListener("scroll", handleScrollAnimation);
  }
}

window.addEventListener("scroll", handleScrollAnimation);
