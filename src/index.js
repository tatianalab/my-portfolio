const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const projects = document.querySelectorAll('.project-tile')
// const icon_tools = document.querySelectorAll('.icon-tools')

open_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

projects.forEach(project => {
  project.addEventListener('mouseover', () =>{
    project.classList.add('slide')
  })
})

projects.forEach(project => {
  project.addEventListener('mouseout', () =>{
    project.classList.remove('slide')
  })
})
