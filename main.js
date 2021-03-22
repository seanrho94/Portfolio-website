const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const toggleBtn = document.querySelector(".navbar__toggle-btn");
const cancelBtn = document.querySelector(".navbar__cancel-btn");

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

toggleBtn.onclick = ()=>{
  menu.classList.add("active");
  toggleBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  toggleBtn.classList.remove("hide");
}

//Handle scrolling when tapping on the navbar menu
menu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link
  if(link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
});