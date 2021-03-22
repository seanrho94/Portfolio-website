const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const toggleBtn = document.querySelector(".navbar__toggle-btn");
const cancelBtn = document.querySelector(".navbar__cancel-btn");

//Change navbar color on scrolling.
window.onscroll = (()=>{
  if (this.scrollY > 20) {
    navbar.classList.add("sticky")
  }else {
    navbar.classList.remove("sticky")
  }
});

//Handle hamburger menu in mobile view.
toggleBtn.onclick = (()=>{
  menu.classList.add("active");
  toggleBtn.classList.add("hide");
});

//Handle cancel (to close navbar menu) button in mobile view.
cancelBtn.onclick = (()=>{
  menu.classList.remove("active");
  toggleBtn.classList.remove("hide");
});

//Close responsive navbar menu after navigating to the section.
menu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link
  if(link == null) {
    return;
  }
  menu.classList.remove("active");
  toggleBtn.classList.remove("hide");
});

//Handle scrolling when tapping on the navbar menu (https://github.com/cferdinandi/smooth-scroll)
const scroll = new SmoothScroll('.home__intro a[href*="#"], .navbar__menu a[href*="#"]', {
  header: '[data-scroll-header]',
  speed: 800
});

//Active navbar menu based on current section.
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar__menu li a');
window.addEventListener('scroll', ()=> {
  let current = '';
  
  sections.forEach( section => {
    const sectionTop =  section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 7)) {
      current = section.getAttribute('id');
    }
  })
  
  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)) {
      li.classList.add('active')
    }
  })
});


