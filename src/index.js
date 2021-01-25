const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const projects = document.querySelectorAll('.project-tile');
const projectButton = document.querySelector('#projectMenuItem');
const projectSubMenu = document.querySelector('.projects-sub');


open_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'));
});

close_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

projects.forEach(project => {
  project.addEventListener('mouseover', () =>{
    project.classList.add('slide')
  });
});

projects.forEach(project => {
  project.addEventListener('mouseout', () =>{
    project.classList.remove('slide')
  });
});

projectButton.addEventListener('click', () => {
  projectSubMenu.classList.toggle('active');
});



